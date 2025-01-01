<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="space-y-4">
    <h2
      class="text-xl underline text-sky-700 underline-offset-8"
    >
      Socials
    </h2>
    <div class="flex items-center gap-4 font-roboto">
      <div v-for="social in appConfig.site.socials" :key="social.name">
        <NuxtLink
          :to="social.url"
          class="capitalize flex items-center gap-1 underline rounded hover:text-sky-600 transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
          target="_blank"
          tabindex="0"
          :title="`navigate to ${social.name}`"
        >
          <div :class="`${social.iconClass} inline-block`"></div>
          {{ social.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
