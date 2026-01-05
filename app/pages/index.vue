<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
useHead({ title: "Home" });
defineOgImageComponent("Home");

const { loaded } = useFadeSlideLoadingState();
</script>

<template>
  <div>
    <main
      class="text-defaults px-2 md:px-0 pt-[4rem] min-h-[100vh] container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2"
    >
      <div class="font-departure space-y-4">
        <HomeCurrentTime />
        <HomeWeatherReport />
        <div class="md:block hidden">
          <HomeFlowTimer />
          <HomeCalendar />
          <!-- <HomeTasks /> -->
        </div>
      </div>
      <div class="space-y-4 my-8">
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

      <div class="block md:hidden mb-8">
        <AppFooter />
      </div>
    </main>

    <HomeFooter />
  </div>
</template>
