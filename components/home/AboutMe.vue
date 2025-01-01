<template>
  <div class="space-y-4">
    <h2
      class="text-xl text-sky-700 underline underline-offset-8"
    >
      About me
    </h2>

    <section class="font-roboto prose">
      <ContentDoc path="/home/_about" :head="false" />
    </section>
  </div>
</template>

<style scoped>
.prose {
  max-width: 100ch;
}
</style>
