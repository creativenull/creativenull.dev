import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asOgImageCollection } from "nuxt-og-image/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection(
      asOgImageCollection({
        type: "page",
        source: "posts/*.md",
        schema: z.object({
          tags: z.string(),
          publishDate: z.string(),
          draft: z.boolean(),
          ogImage: z.object({
            component: z.any(),
            props: z.object({
              title: z.string(),
              publishDate: z.string(),
            }),
          }),
        }),
      }),
    ),
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
