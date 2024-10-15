<script setup lang="ts">
const appConfig = useAppConfig();

const notificationPermissionGranted = ref(false);

const startNotification = ref<Notification | null>(null);
function notifyStart() {
  if (!notificationPermissionGranted.value) return;

  startNotification.value = new Notification(
    `${appConfig.site.title} / Flow Timer`,
    {
      body: "The timer has started",
      tag: "timer-started",
    },
  );
}

const endNotification = ref<Notification | null>(null);
function notifyEnd() {
  if (!notificationPermissionGranted.value) return;

  endNotification.value = new Notification(
    `${appConfig.site.title} / Flow Timer`,
    {
      body: "The timer has ended",
      tag: "timer-ended",
    },
  );
}

const minutes = useState("flowTimeMinutes", () => "00");
const seconds = useState("flowTimerSeconds", () => "00");
const timeInterval = useState<number | null>("flowTimerInterval", () => null);
const running = useState("running", () => false);

function updateTimer() {
  if (seconds.value === "59") {
    minutes.value = String(parseInt(minutes.value) + 1).padStart(2, "0");
    seconds.value = "00";
  } else {
    seconds.value = String(parseInt(seconds.value) + 1).padStart(2, "0");
  }
}

function startTimer() {
  if (!running.value) {
    running.value = true;
    timeInterval.value = window.setInterval(updateTimer, 1000);
    notifyStart();
  }
}

function stopTimer() {
  if (running.value) {
    running.value = false;
    window.clearInterval(timeInterval.value!);
    clearTimer();
    notifyEnd();
  }
}

function clearTimer() {
  minutes.value = "00";
  seconds.value = "00";
}

onMounted(() => {
  if ("Notification" in window) {
    window.Notification.requestPermission().then((permission) =>
      permission === "granted"
        ? (notificationPermissionGranted.value = true)
        : (notificationPermissionGranted.value = false),
    );
  }
});
</script>

<template>
  <div class="py-4">
    <h2 class="text-xl">Flow Timer</h2>
    <div
      class="text-base sm:text-4xl transition-color duration-300"
      :class="{ 'text-green-500': running }"
    >
      <span v-text="minutes"></span>&colon;<span v-text="seconds"></span>
    </div>
    <button
      @click="() => (running ? stopTimer() : startTimer())"
      type="button"
      title="start or stop the timer"
      class="capitalize border border-gray-700 bg-white dark:bg-gray-800 active:(bg-gray-100 translate-y-[2px]) dark:active:bg-gray-700 transition-transform duration-100 rounded focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white) px-2 mt-2"
    >
      {{ running ? "stop" : "start" }}
    </button>
  </div>
</template>
