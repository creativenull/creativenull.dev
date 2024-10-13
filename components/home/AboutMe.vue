<template>
  <div class="space-y-4">
    <h2 class="text-xl sm:text-2xl underline underline-offset-8">About me</h2>

    <section class="font-roboto prose text-gray-600 dark:text-gray-400">
      <ContentDoc path="/home/_about" :head="false" />
    </section>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100ch;
}
</style>
