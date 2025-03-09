<script setup lang="ts">
const { data: recentPosts } = await useAsyncData(
  "/content/posts?recent",
  async () => await queryCollection("posts").where("draft", "=", false).order("publishDate", "DESC").limit(3).all(),
);
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl text-sky-700 underline underline-offset-8 font-departure">Recent posts</h2>
    <div class="font-roboto space-y-4">
      <div v-for="post in recentPosts" :key="post.path" class="space-y-1">
        <div class="text-lg">
          <span class="text-gray-600 dark:text-gray-400"> {{ getLocaleDate(post.publishDate) }}&nbsp; </span>

          <h2 class="inline-block">
            <NuxtLink
              :to="post.path"
              class="underline rounded hover:(text-sky-600 underline) transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
              tabindex="0"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ getTruncatedDescription(post.description) }}
        </p>
      </div>
    </div>
  </div>
</template>
