<script setup lang="ts">
withDefaults(defineProps<{ textClass?: string; mode?: string }>(), {
  textClass: "text-2xl",
  mode: "light",
});
</script>

<template>
  <div :class="textClass" style="font-family: Righteous">
    <span
      :class="{
        'text-white': mode === 'dark',
        'text-gray-700': mode === 'light',
      }"
    >
      Creative
    </span>
    <span class="text-sky-700">Null</span>
  </div>
</template>
