<script setup lang="ts">
const hours = useState("currentTimeHours", () => "00");
const minutes = useState("currentTimeMinutes", () => "00");
const timeInterval = useState<number | null>("currentTimeInterval", () => null);

function updateCurentTime() {
  const date = new Date();

  hours.value = date.getHours().toString().padStart(2, "0");
  minutes.value = date.getMinutes().toString().padStart(2, "0");
}

onMounted(() => {
  updateCurentTime();
  timeInterval.value = window.setInterval(updateCurentTime, 1000);
});
</script>

<template>
  <h2 class="text-3xl sm:text-6xl">{{ hours }}<span class="blink-animation">:</span>{{ minutes }}</h2>
</template>

<style scoped>
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.blink-animation {
  animation: blink 2s ease infinite;
}
</style>
