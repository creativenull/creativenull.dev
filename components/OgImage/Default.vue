<script setup lang="ts">
withDefaults(defineProps<{ title?: string; description?: string }>(), {
  title: "title",
  description: "",
});
</script>

<template>
  <div class="h-full w-full bg-gray-900 text-white">
    <div class="h-full flex flex-col justify-between p-10">
      <div>
        <h1 class="text-[6rem]">
          {{ title }}
        </h1>
      </div>
      <div class="self-end">
        <img src="/logo_static.png" />
      </div>
    </div>
  </div>
</template>
