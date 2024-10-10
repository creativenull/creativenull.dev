export function useLoadingIndicatorSetup() {
  const loadingColor = useState("loadingColor", () => "#0369a1");

  function updateLoadingColor() {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    loadingColor.value = media.matches ? "#ffffff" : "#0369a1";

    media.addEventListener("change", (e) => {
      loadingColor.value = e.matches ? "#ffffff" : "#0369a1";
    });
  }

  onMounted(() => updateLoadingColor());

  return { loadingColor, updateLoadingColor };
}
