// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-10-05",

  css: [
    "@unocss/reset/tailwind-compat.css",
    "~/assets/css/departure-mono.css",
    "~/assets/css/shiki.css",
    "~/assets/css/app-transitions.css",
  ],

  content: {
    highlight: {
      langs: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "shell",
        "lua",
        "php",
        "vimscript",
      ],
      theme: {
        default: "github-light-default",
        dark: "github-dark-default",
      },
    },
  },
});
