<script setup lang="ts">
const { loadingColor } = useLoadingIndicatorSetup();
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} / ${appConfig.site.title}` : appConfig.site.title;
  },
});

defineOgImageComponent("Default");
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator :color="loadingColor" :throttle="0" />
  <AppTopBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply bg-gray-200 dark:bg-gray-900;
}
</style>
