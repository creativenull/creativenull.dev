import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const hostname = useRuntimeConfig(event).public.siteUrl as string;
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({ hostname });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
