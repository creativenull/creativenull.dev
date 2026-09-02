<script setup lang="ts">
const appConfig = useAppConfig();
const socials = appConfig.site.socials.filter((s) => s.name !== "GitHub");
</script>

<template>
  <footer class="border-t border-gray-800 dark:border-gray-200 pt-4 my-10">
    <div class="space-y-1">
      <nav class="text-lg flex gap-4">
        <div v-for="social in socials" :key="social.name">
          <NuxtLink
            :to="social.url"
            class="capitalize flex items-center gap-1 underline rounded hover:text-sky-600 transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
            target="_blank"
            tabindex="0"
            :title="`navigate to ${social.name}`"
          >
            <div :class="`${social.iconClass}`"></div>
          </NuxtLink>
        </div>
      </nav>
    </div>

    <div class="my-4">
      <h6 class="text-sm font-jetbrains">whoami</h6>
      <p class="text-sm my-1">
        I am a self-employed software developer from Trinidad &amp; Tobago 🇹🇹. working with Laravel and Vue
        applications. I am passionate about open-source and maybe a bit obsessed with configuring vim.
      </p>
    </div>

    <AppFooter />
  </footer>
</template>
