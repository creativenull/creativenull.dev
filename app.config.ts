// @unocss-include

export default defineAppConfig({
  site: {
    title: "CreativeNull",
    description:
      "Welcome to my website! Check out my blogs, projects or just chill on my dashboard I use for work.",
    author: "Arnold Chand",

    socials: [
      {
        name: "GitHub",
        iconClass: "light:i-logos-github-icon dark:i-simple-icons-github",
        url: "https://github.com/creativenull",
      },
      {
        name: "Twitter",
        iconClass: "light:i-logos-x dark:i-simple-icons-twitter",
        url: "https://twitter.com/creativenu11",
      },
      {
        name: "Mastodon",
        iconClass: "light:i-logos-mastodon-icon dark:i-simple-icons-mastodon",
        url: "https://mastodon.online/@creativenull",
      },
      {
        name: "Bluesky",
        iconClass: "light:i-logos-bluesky dark:i-simple-icons-bluesky",
        url: "https://bsky.app/profile/creativenull.bsky.social",
      },
    ],

    menus: {
      topBarMenu: [
        { name: "home", link: "/" },
        { name: "posts", link: "/posts" },
        { name: "projects", link: "/projects" },
        { name: "portfolio", link: "/portfolio" },
      ],
    },

    dateTime: {
      locale: "en-TT",
      options: {
        timeZone: "America/Port_of_Spain",
        dateStyle: "short",
        timeStyle: "short",
        hour12: false,
      } as Intl.DateTimeFormatOptions,
    },
  },
});
