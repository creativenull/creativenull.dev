// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  site: {
    url: "http://localhost:3000",
    name: "CreativeNull",
    description: "Welcome to my website! Check out my blogs, projects or just chill on my dashboard I use for work.",
    defaultLocale: "en",
  },

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },

    head: {
      script:
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://umami.creativenull.xyz/script.js",
                "data-website-id": "69f44c4e-c105-4516-bfc9-72480710fad1",
              },
            ]
          : [],
    },
  },

  devtools: { enabled: true },
  modules: [
    "nuxt-security",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-og-image",
    "@nuxt/content",
  ],

  routeRules: {
    "/": {
      prerender: true,
      headers: { "cache-control": "no-cache, no-store, must-revalidate" },
    },
    "/**": { headers: { "cache-control": "no-cache, no-store, must-revalidate" } },
    "/_nuxt/**": { headers: { "cache-control": "max-age=31536000, immutable" } },
    "/api/**": { cors: true },
  },

  compatibilityDate: "2025-03-10",

  css: [
    "@unocss/reset/tailwind-compat.css",
    "~/assets/css/departure-mono.css",
    "~/assets/css/shiki.css",
    "~/assets/css/app-transitions.css",
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["json", "js", "ts", "html", "css", "vue", "shell", "lua", "php", "vimscript", "nix"],
          theme: "github-light",
        },
      },
    },
  },

  ogImage: {
    fonts: ["Roboto"],
    componentDirs: ["ogimages"],
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        // Allow umami analytics url to be loaded from any origin
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          // "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "https://umami.creativenull.xyz",
          "'wasm-unsafe-eval'",
        ],
      },
    },
  },

  fonts: {
    families: [
      { name: "JetBrains Mono", provider: "bunny" },
      { name: "Roboto", provider: "bunny" },
      { name: "Righteous", provider: "bunny" },
    ],
  },
});
