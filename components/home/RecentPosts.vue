<script setup lang="ts">
function truncated(description: string) {
  return description.length > 80
    ? description.slice(0, 80) + "..."
    : description + "...";
}

function humanReadableDate(date: string) {
  return new Date(date).toLocaleDateString();
}

const query = {
  path: "/posts",
  where: [{ draft: false }],
  limit: 3,
  sort: [{ publishDate: -1 }],
};
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl sm:text-3xl">My recent posts</h2>
    <div class="font-roboto space-y-4">
      <ContentList :query v-slot="{ list }">
        <div v-for="post in list" :key="post._path" class="space-y-1">
          <div class="text-lg">
            <h2 class="inline-block">
              <NuxtLink :to="post._path" class="underline">
                {{ post.title }}
              </NuxtLink>
            </h2>
            -
            <span>{{ humanReadableDate(post.publishDate) }}</span>
          </div>
          <p class="text-sm">
            {{ truncated(post.description) }}
          </p>
        </div>
      </ContentList>
    </div>
  </div>
</template>
