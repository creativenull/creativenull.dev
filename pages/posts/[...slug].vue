<template>
  <main class="px-2 sm:px-0 pt-[4rem]">
    <ContentDoc v-slot="{ doc }">
      <article class="prose mx-auto">
        <h1 class="text-2xl sm:text-4xl mb-0">{{ doc.title }}</h1>
        <span class="text-xs">{{ getLocaleDate(doc.publishDate) }}</span>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
