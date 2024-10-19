<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
useHead({ title: "Home" });
defineOgImageComponent("Home");

const { loaded } = useFadeSlideLoadingState();
</script>

<template>
  <div>
    <main
      class="text-defaults px-2 sm:px-0 pt-[4rem] font-departure min-h-[100vh] container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2"
    >
      <div class="space-y-4">
        <HomeCurrentTime />
        <HomeWeatherReport />
        <div class="sm:block hidden">
          <HomeFlowTimer />
          <HomeTasks />
        </div>
      </div>
      <div class="space-y-4 mb-4">
        <Transition name="fade-slide">
          <HomeAboutMe v-if="loaded" />
        </Transition>
        <Transition name="fade-slide-delay">
          <HomeRecentPosts v-if="loaded" />
        </Transition>
        <Transition name="fade-slide-delay">
          <HomeSocials v-if="loaded" />
        </Transition>
      </div>
    </main>

    <HomeFooter />
  </div>
</template>
