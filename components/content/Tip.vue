<template>
  <div :class="`${variant} border-l border-l-10 py-2 px-2 md:my-8`">
    <h4 :class="`${textColor} capitalize m-0`">{{ props.tip }}</h4>
    <div class="text-xs md:text-base">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type TipType = "note" | "warning" | "outdated";
const props = withDefaults(defineProps<{ tip?: TipType }>(), { tip: "note" });

const variant = computed(() => {
  switch (props.tip) {
    case "outdated":
      return "border-l-red-500 dark:border-l-red-600";
    case "warning":
      return "border-l-amber-500 dark:border-l-amber-600";
    case "note":
    default:
      return "border-l-emerald-500 dark:border-l-emerald-600";
  }
});

const textColor = computed(() => {
  switch (props.tip) {
    case "outdated":
      return "text-red-500 dark:text-red-600";
    case "warning":
      return "text-amber-500 dark:text-amber-600";
    case "note":
    default:
      return "text-emerald-500 dark:text-emerald-600";
  }
});
</script>
