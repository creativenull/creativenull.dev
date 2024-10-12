<script setup lang="ts">
const { loadingColor } = useLoadingIndicatorSetup();
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} / ${appConfig.site.title}`
      : appConfig.site.title;
  },
});
</script>

<template>
  <NuxtLoadingIndicator :color="loadingColor" :throttle="0" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply bg-gray-200 dark:bg-gray-900;
}
</style>
