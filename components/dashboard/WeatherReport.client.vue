<script setup lang="ts">
const { weather, status, fetchWeather } = useWeatherApi();

onMounted(() => fetchWeather());
</script>

<template>
  <div>
    <h2 v-if="status === 'success'" class="text-xl sm:text-3xl">
      {{ weather }}
    </h2>
    <div v-else class="animate-pulse">
      <div class="h-[2rem] max-w-[300px] bg-gray-400"></div>
    </div>

    <h6 class="text-xs">
      provider
      <NuxtLink
        to="https://github.com/chubin/wttr.in"
        target="_blank"
        class="underline"
        tabindex="0"
      >
        wttr.in
      </NuxtLink>
    </h6>
  </div>
</template>
