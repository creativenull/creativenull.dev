<template>
  <div class="space-y-4">
    <h2 class="text-xl sm:text-3xl">My open-source projects</h2>
    <div class="font-roboto space-y-4">
      <ContentList path="/projects" v-slot="{ list }">
        <div v-for="project in list" :key="project.url" class="space-y-1">
          <div class="text-lg">
            <h2 class="inline-block">
              <NuxtLink
                :to="project.url"
                class="underline rounded hover:(text-sky-600 underline) transition duration-200 focus:(outline-none ring-1 ring-gray-800) dark:focus:(ring-white)"
                target="_blank"
                tabindex="0"
              >
                {{ project.title }}
              </NuxtLink>
            </h2>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ project.description }}
          </p>
        </div>
      </ContentList>
    </div>
  </div>
</template>
