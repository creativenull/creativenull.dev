<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <nav class="hidden sm:block">
    <NuxtLink
      v-for="item in appConfig.site.menus.topBarMenu"
      :key="item.name"
      :to="item.link"
      :title="`navigate to ${item.name}`"
      tabindex="0"
      class="capitalize hover:text-sky-600 transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white) rounded inline-block p-2"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>
