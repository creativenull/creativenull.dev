<script setup lang="ts">
const appConfig = useAppConfig();
const socials = appConfig.site.socials.filter((s) => s.name !== "GitHub");
</script>

<template>
  <footer class="border-t border-gray-800 dark:border-gray-200 pt-4 my-10">
    <div class="space-y-1">
      <p class="italic">Enjoyed the post or have some constructive thoughts?</p>
      <p class="text-sm">Reach out to me:</p>
      <nav class="text-sm space-y-2">
        <div v-for="social in socials" :key="social.name">
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
      </nav>
    </div>

    <div>
      <p class="italic">About me</p>
      <p class="text-sm">
        I am a software developer and open-source enthusiast. I live in the
        island of Trinidad and Tobago as a freelance developer mainly building
        applications with Laravel and Vuejs.
      </p>
    </div>

    <AppFooter />
  </footer>
</template>
