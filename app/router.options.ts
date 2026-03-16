import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, _from, _savedPosition): { el?: string; top: number; behavior: "smooth" } {
    if (to.hash) {
      return {
        el: to.hash,
        top: 65,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
} satisfies RouterConfig;
