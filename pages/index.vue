<script setup lang="ts">
definePageMeta({ layout: "dashboard", });
useHead({ title: "CreativeNull / Home" });
</script>

<template>
  <AppTopBar />

  <main
    class="text-defaults px-2 sm:px-0 pt-[3.5rem] font-departure min-h-[100vh] container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2"
  >
    <div class="space-y-4">
      <HomeCurrentTime />
      <HomeWeatherReport />
      <HomeFlowTimer />
    </div>
    <div class="space-y-4">
      <div class="space-y-4">
        <h2 class="text-xl sm:text-3xl">Recent Posts</h2>
        <div class="font-roboto space-y-2">
          <div>
            <div class="flex items-center gap-2">
              <a href="#" class="underline">
                Amet voluptatem rerum molestias harum
              </a>
              <span class="text-sm">2024-01-01</span>
            </div>
            <p class="text-sm">
              Adipisicing et quisquam excepturi repellat iusto Voluptatibus
              veritatis dolorem nam dolorum placeat cumque? Voluptate non
              quibusdam molestias laudantium ab laudantium?
            </p>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <a href="#" class="underline"> Amet ipsum omnis quos adipisci </a>
              <span class="text-sm">2024-01-01</span>
            </div>
            <p class="text-sm">
              Adipisicing et quisquam excepturi repellat iusto Voluptatibus
              veritatis dolorem nam dolorum placeat cumque? Voluptate non
              quibusdam molestias laudantium ab laudantium?
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <HomeFooter />
</template>
