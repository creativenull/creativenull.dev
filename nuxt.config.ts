// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-10-05",

  css: ["@unocss/reset/tailwind-compat.css", "~/assets/css/departure-mono.css"],
});
