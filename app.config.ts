// @unocss-include

export default defineAppConfig({
  site: {
    title: "CreativeNull",
    description:
      "Welcome to my website! Check out my blogs, projects or just chill on my dashboard I use for work.",
    author: "Arnold Chand",

    socials: [
      {
        name: "twitter",
        iconClass: "i-bi-twitter-x",
        url: "https://twitter.com/creativenu11",
      },
      {
        name: "mastodon",
        iconClass: "i-bi-mastodon",
        url: "https://mastodon.online/@creativenull",
      },
      {
        name: "GitHub",
        iconClass: "i-bi-github",
        url: "https://github.com/creativenull",
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
