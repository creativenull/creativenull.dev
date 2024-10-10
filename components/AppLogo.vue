<script setup lang="ts">
withDefaults(defineProps<{ textClass?: string }>(), { textClass: "text-2xl" });
</script>

<template>
  <div id="logo" :class="`${textClass} font-righteous`">
    <span id="logo-1" class="transition duration-300">Creative</span>
    <span id="logo-2" class="transition duration-300">Null</span>
  </div>
</template>

<style scoped lang="postcss">
#logo-1 {
  @apply text-gray-700 dark:text-white drop-shadow-lg;
}

#logo-2 {
  @apply text-sky-700 drop-shadow-lg;
}

#logo:hover #logo-1 {
  @apply text-sky-700;
}

#logo:hover #logo-2 {
  @apply text-gray-700 dark:text-white;
}
</style>
