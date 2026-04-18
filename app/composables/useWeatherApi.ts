const weatherApiUrl = "https://wttr.in/Port_of_Spain?format=3&m";
const weatherStorageKey = "app:wttr_data";
const weatherStorageExpiresKey = "app:wttr_data:expires_at";

// Refresh every 12 hours
const weatherTTL = 12 * 60 * 60 * 1000;

function getCachedWeather() {
  const item = localStorage.getItem(weatherStorageKey);
  const expiresAt = localStorage.getItem(weatherStorageExpiresKey);

  if (!item || !expiresAt) {
    return null;
  }

  if (new Date().getTime() > Number(expiresAt)) {
    localStorage.removeItem(weatherStorageKey);
    localStorage.removeItem(weatherStorageExpiresKey);

    return null;
  }

  return item;
}

/**
 * There was a change in service. Now making a request from the browser will
 * respond with plain HTML instead of plain text.
 */
function parseHtml(plainText: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(plainText, "text/html");
  if (!doc) return "N/A";

  const weatherData = doc.querySelector(".term-container")?.textContent;
  if (!weatherData) return "N/A";

  return weatherData;
}

async function _fetchWeather(): Promise<string | null> {
  const cached = getCachedWeather();

  if (cached) {
    return cached;
  }

  const data = await $fetch<string>(weatherApiUrl, { responseType: "text" });
  const weatherData = parseHtml(data);

  localStorage.setItem(weatherStorageKey, weatherData);
  localStorage.setItem(weatherStorageExpiresKey, (new Date().getTime() + weatherTTL).toString());

  return weatherData;
}

export function useWeatherApi() {
  const weather = useState<string | null>("weather", () => null);
  const status = useState<"pending" | "success" | "error">("status", () => "pending");

  async function fetchWeather() {
    status.value = "pending";
    weather.value = await _fetchWeather();

    if (weather.value) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  }

  return { weather, status, fetchWeather };
}
