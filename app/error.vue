<script setup lang="ts">
const { loadingColor } = useLoadingIndicatorSetup();
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator :color="loadingColor" :throttle="0" />
  <AppTopBar />
  <NuxtLayout name="post">
    <main class="px-2 sm:px-0 pt-[4rem]">
      <article class="prose prose-gray dark:prose-invert mx-auto">
        <h1 class="text-2xl sm:text-4xl mb-0 font-roboto-serif">
          {{ error?.status ?? 500 }} - {{ error?.message ?? "Something went wrong" }}
        </h1>
        <div class="mt-4">
          <NuxtLink to="/">Go Home</NuxtLink>
        </div>
      </article>
    </main>
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply bg-gray-200 dark:bg-gray-900;
}
</style>
