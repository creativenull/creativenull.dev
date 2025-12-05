<script setup lang="ts">
import type { NuxtError } from "#app";
import DefaultLayout from "@/layouts/default.vue";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <DefaultLayout>
    <main class="prose dark:prose-invert">
      <h1>{{ error?.statusCode ?? 500 }} - {{ error?.message ?? "Something went wrong" }}</h1>
      <NuxtLink to="/">Go back home</NuxtLink>
    </main>
  </DefaultLayout>
</template>
