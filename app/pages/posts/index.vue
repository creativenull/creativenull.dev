<script setup lang="ts">
useHead({ title: "Posts" });
defineOgImage("Default", { title: "Posts" });

const { data: posts } = await useAsyncData(
  "/content/posts",
  async () => await queryCollection("posts").where("draft", "=", false).order("publishDate", "DESC").all(),
);
</script>

<template>
  <div class="space-y-4 mb-4">
    <h2 class="text-xl sm:text-3xl">Posts</h2>
    <div class="text-pretty space-y-4">
      <div v-for="post in posts" :key="post.path" class="space-y-2">
        <div>
          <h2 class="inline-block text-lg">
            <NuxtLink
              :to="post.path"
              class="underline rounded hover:(text-sky-600 underline) transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
              tabindex="0"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>
          <span class="text-gray-600 dark:text-gray-400 hidden sm:inline"> &nbsp;&mdash;&nbsp; </span>
          <h4 class="text-gray-600 dark:text-gray-400 text-sm sm:inline">
            {{ getLocaleDate(post.publishDate) }}
          </h4>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ getTruncatedDescription(post.description ?? "") }}
        </p>
      </div>

      <AppFooter />
    </div>
  </div>
</template>
