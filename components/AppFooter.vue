<script setup lang="ts">
const startYear = 2019;
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="font-departure text-xs">
    &copy; Arnold Chand (<NuxtLink
      to="https://github.com/creativenull"
      target="_blank"
      tabindex="0"
      class="underline rounded focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
      >creativenull</NuxtLink
    >) {{ startYear }} - {{ currentYear }}
  </div>
</template>
