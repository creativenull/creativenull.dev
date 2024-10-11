<script setup lang="ts">
definePageMeta({ layout: "post" });
const { loaded } = useFadeSlideLoadingState();
</script>

<template>
  <main class="px-2 sm:px-0 pt-[4rem]">
    <ContentDoc v-slot="{ doc }">
      <article class="prose mx-auto">
        <Transition name="fade-slide">
          <div v-if="loaded">
            <h1 class="text-2xl sm:text-4xl mb-0">{{ doc.title }}</h1>
            <span class="text-xs">{{ getLocaleDate(doc.publishDate) }}</span>
          </div>
        </Transition>

        <Transition name="fade-slide-delay">
          <ContentRenderer v-if="loaded" :value="doc" />
        </Transition>
      </article>
    </ContentDoc>
  </main>
</template>
