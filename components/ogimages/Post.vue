<script setup lang="ts">
withDefaults(defineProps<{ title?: string; publishDate?: string }>(), {
  title: "Title",
  publishDate: "1970-01-01 00:00",
});
</script>

<template>
  <div class="h-full w-full bg-gray-900 text-white">
    <div class="h-full flex flex-col justify-between p-10">
      <div>
        <p class="text-[5rem]">
          {{ title }}
        </p>
        <p class="text-[2rem]">
          {{ getHumanReadableDate(publishDate) }}
        </p>
      </div>
      <div class="self-end">
        <img src="/logo_ogimage.png" />
      </div>
    </div>
  </div>
</template>
