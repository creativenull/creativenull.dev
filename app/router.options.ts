import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, _reject) => {
      window.setTimeout(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            top: 65,
            behavior: "smooth",
          });
        }
      }, 500);
    });
  },
} satisfies RouterConfig;
