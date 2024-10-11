<script setup lang="ts">
const { loaded } = useFadeSlideLoadingState();
</script>

<template>
  <div class="bg-defaults text-defaults">
    <AppTopBar />

    <Transition name="fade">
      <main
        v-if="loaded"
        class="max-w-[65ch] mx-auto px-2 sm:px-0 pt-[4rem]"
      >
        <slot />
      </main>
    </Transition>
  </div>
</template>
