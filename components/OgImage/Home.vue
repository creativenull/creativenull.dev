<script setup lang="ts">
withDefaults(defineProps<{ description?: string }>(), { description: "" });
</script>

<template>
  <div class="h-full w-full bg-gray-900 text-white p-10">
    <div class="flex flex-col gap-8">
      <img src="/logo_static.png" />
      <p class="text-[4rem]">
        {{ description }}
      </p>
    </div>
  </div>
</template>
