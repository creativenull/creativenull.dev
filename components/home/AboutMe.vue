<script setup lang="ts">
const { data: about } = await useAsyncData(
  "/content/home/about",
  async () => await queryCollection("home").path("/home/about").first(),
);
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl text-sky-700 underline underline-offset-8 font-departure">About me</h2>

    <section class="font-roboto prose">
      <ContentRenderer v-if="about" :value="about" />
    </section>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100ch;
}
</style>
