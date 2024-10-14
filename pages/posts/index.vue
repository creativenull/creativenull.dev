<script setup lang="ts">
const query = {
  path: "/posts",
  where: [{ draft: false }],
  sort: [{ publishDate: -1 }],
};
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl sm:text-3xl">Posts</h2>
    <div class="font-roboto space-y-4">
      <ContentList :query v-slot="{ list }">
        <div v-for="post in list" :key="post._path" class="space-y-1">
          <div class="text-lg">
            <span>{{ getLocaleDate(post.publishDate) }}</span> /
            <h2 class="inline-block">
              <NuxtLink
                :to="post._path"
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
      </ContentList>
    </div>
  </div>
</template>
