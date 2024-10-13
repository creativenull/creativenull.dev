<script setup lang="ts">
const socials = [
  {
    title: "GitHub",
    url: "https://github.com/creativenull",
    iconClass: "i-bi-github",
  },
  {
    title: "Mastodon",
    url: "https://mastodon.online/@creativenull",
    iconClass: "i-bi-mastodon",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/creativenu11",
    iconClass: "i-bi-twitter-x",
  },
];
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl sm:text-3xl">Socials</h2>
    <div class="flex items-center gap-4 font-roboto">
      <div v-for="social in socials" :key="social.title">
        <NuxtLink
          :to="social.url"
          class="flex items-center gap-1 no-underline rounded hover:(text-sky-600 underline) transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
          target="_blank"
          tabindex="0"
          :title="`navigate to ${social.title}`"
        >
          <div :class="`${social.iconClass} inline-block`"></div>
          {{ social.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
