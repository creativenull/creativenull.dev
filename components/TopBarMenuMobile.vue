<script setup lang="ts">
const appConfig = useAppConfig();
const menuVisible = useState("menuVisible", () => false);

onMounted(() => {
  window.addEventListener("resize", () => (menuVisible.value = false));
});
</script>

<template>
  <button
    @click="menuVisible = !menuVisible"
    type="button"
    class="fixed top-0 right-0 mr-4 z-10 mt-2 capitalize focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white) cursor-pointer rounded bg-transparent p-1 flex items-center gap-1 sm:hidden"
    title="toggle menu"
  >
    {{ menuVisible ? "close" : "menu" }}
    <div
      class="inline-block w-6 h-6"
      :class="{ 'i-bi-list': !menuVisible, 'i-bi-x': menuVisible }"
    />
  </button>

  <div
    v-if="menuVisible"
    id="top-bar-mobile-menu"
    class="fixed top-0 left-0 z-10 mt-[3rem] w-full backdrop-blur bg-white/30 dark:bg-gray-800/30 p-4"
  >
    <NuxtLink
      v-for="item in appConfig.site.menus.topBarMenu"
      :key="item.name"
      @click="
        () => {
          menuVisible = false;
          navigateTo(item.link);
        }
      "
      :title="`navigate to ${item.name}`"
      exact-active-class="underline text-sky-600"
      tabindex="0"
      class="capitalize hover:text-sky-600 transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white) rounded block p-2"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>
