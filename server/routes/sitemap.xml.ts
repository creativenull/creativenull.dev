import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const hostname = useRuntimeConfig(event).public.siteUrl as string;
  const posts = await queryCollection(event, "posts").all();
  const sitemap = new SitemapStream({ hostname });

  for (const doc of posts) {
    sitemap.write({
      url: doc.path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
