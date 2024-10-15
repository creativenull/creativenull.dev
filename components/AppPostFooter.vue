<template>
  <footer
    class="rounded-lg border border-gray-300 dark:border-gray-800 dark:text-gray-400 text-gray-600 max-w-[65ch] mx-auto p-4 my-10"
  >
    <div>
      <h5 class="italic">
        Enjoyed the post or have some constructive thoughts?
      </h5>
      <p class="text-sm">Let me know what you think by messaging me on</p>
      <ul class="text-sm space-y-2">
        <li>
          <NuxtLink
            to="https://x.com/creativenu11"
            external
            target="_blank"
            tabindex="0"
          >
            <div class="i-bi-twitter-x inline-block"></div>
            @creativenu11
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://mastodon.online/@creativenull"
            external
            target="_blank"
            tabindex="0"
          >
            <div class="i-bi-mastodon inline-block"></div>
            @creativenull@mastodon.online
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div>
      <h5 class="italic">About me</h5>
      <p class="text-sm">
        I am a software developer and open-source enthusiast. I live in the
        island of Trinidad and Tobago as a freelance developer working mainly
        with PHP (Laravel), TypeScript, and Vuejs.
      </p>
    </div>
  </footer>
</template>
