<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

useHead({ title: "Posts" });

const query: QueryBuilderParams = {
  path: "/posts",
  where: [{ draft: false }],
  sort: [{ publishDate: -1 }],
};
</script>

<template>
  <div class="space-y-4 mb-4">
    <h2 class="text-xl sm:text-3xl">Posts</h2>
    <div class="text-pretty space-y-4">
      <ContentList :query v-slot="{ list }">
        <div v-for="post in list" :key="post._path" class="space-y-2">
          <div class="text-lg">
            <span class="text-gray-600 dark:text-gray-400">
              {{ getLocaleDate(post.publishDate) }}&nbsp;
            </span>
            <h3 class="inline">
              <NuxtLink
                :to="post._path"
                class="underline rounded hover:(text-sky-600 underline) transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
                tabindex="0"
              >
                {{ post.title }}
              </NuxtLink>
            </h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ getTruncatedDescription(post.description) }}
          </p>
        </div>
      </ContentList>

      <AppFooter />
    </div>
  </div>
</template>
