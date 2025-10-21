<script setup lang="ts">
definePageMeta({ layout: "post", layoutTransition: { name: "fade" } });
const { loaded } = useFadeSlideLoadingState();

const route = useRoute();
const { data: post } = await useAsyncData(
  route.path,
  async () => await queryCollection("posts").path(route.path).first(),
);

if (post.value?.ogImage) {
  defineOgImage(post.value.ogImage);
}

useHead({
  title: post.value?.title,
  meta: [
    {
      name: "description",
      content: post.value?.description,
    },
  ],
});
</script>

<template>
  <main class="px-2 sm:px-0 pt-[4rem]">
    <article class="prose prose-gray dark:prose-invert mx-auto">
      <Transition name="fade-slide">
        <div v-if="loaded">
          <h1 v-if="post" class="text-2xl sm:text-4xl mb-0">{{ post.title }}</h1>
          <span v-if="post" class="text-xs">{{ getLocaleDate(post.publishDate) }}</span>
          <div v-if="post" class="inline-block text-xs ml-1">
            <span v-for="tag in getTagsFromString(post.tags)" :key="tag"> #{{ tag }} </span>
          </div>
        </div>
      </Transition>

      <Transition name="fade-slide-delay">
        <div v-if="loaded">
          <ContentRenderer v-if="post" :value="post" />
          <AppPostFooter />
        </div>
      </Transition>
    </article>
  </main>
</template>
