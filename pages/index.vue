<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
useHead({ title: "CreativeNull / Home" });

const loaded = useState('loaded', () => false)
onMounted(() => (loaded.value = true));
</script>

<template>
  <AppTopBar />

  <main
    class="text-defaults px-2 sm:px-0 pt-[4rem] font-departure min-h-[100vh] container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2"
  >
    <div class="space-y-4">
      <HomeCurrentTime />
      <HomeWeatherReport />
      <HomeFlowTimer />
      <HomeTasks />
    </div>
    <div class="space-y-4 mb-4">
      <Transition name="fade-slide">
        <HomeAboutMe v-if="loaded" />
      </Transition>
      <Transition name="fade-slide-delay">
        <HomeRecentPosts v-if="loaded" />
      </Transition>
    </div>
  </main>

  <HomeFooter />
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-delay-enter-active,
.fade-slide-delay-leave-active {
  transition: all 0.5s ease 0.1s;
}

.fade-slide-enter-from,
.fade-slide-leave-to,
.fade-slide-delay-enter-from,
.fade-slide-delay-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.fade-slide-enter-to,
.fade-slide-leave-from,
.fade-slide-delay-enter-to,
.fade-slide-delay-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
