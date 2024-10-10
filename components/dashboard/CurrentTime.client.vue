<script setup lang="ts">
const hours = ref("00");
const minutes = ref("00");
const timeInterval = ref<null | number>(null);

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
  <span class="text-3xl sm:text-6xl">
    {{ hours }}<span class="blink-animation">:</span>{{ minutes }}
  </span>
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
