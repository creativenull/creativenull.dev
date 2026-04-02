import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { defineOgImageSchema } from "nuxt-og-image/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        tags: z.string(),
        publishDate: z.string(),
        draft: z.boolean(),
        ogImage: defineOgImageSchema(),
      }),
    }),
    home: defineCollection({
      type: "page",
      source: "home/*.md",
    }),
    projects: defineCollection({
      type: "data",
      source: "projects/*.yaml",
      schema: z.object({
        title: z.string(),
        url: z.string(),
        description: z.string(),
      }),
    }),
  },
});
