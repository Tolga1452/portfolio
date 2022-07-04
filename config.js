export default {
  heroProfilePic: "github", // static, discord
  hostName: "website-yigitsh.vercel.app",
  siteName: {
    first: "Tolgchu",
    second: "✨",
  },
  personal: {
    name: "Tolga",
    position: "Programmer",
    description:
      "there is nothing lol",
    birthday: {
      day: process.env.BIRTHDAY,
      month: process.env.BIRTHMONTH,
      year: process.env.BIRTHYEAR,
      gmt: "GMT+3:00", // Europe/Istanbul GMT zone
      time: process.env.BIRTHTIME,
    },
    socialAccounts: [
      {
        color: "#5865F2",
        textColor: "#ffffff",
        name: "Discord",
        accountId: "329671025312923648",
        url: "discord://-/users/329671025312923648",
      },
      {
        color: "#24292e",
        textColor: "#ffffff",
        name: "Github",
        url: "https://github.com/Tolga1452",
      },
      {
        color: "#FF0000",
        textColor: "#FFFFFF",
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCnG9fe6RdQSIvO98475CNOw",
      },
      {
        color: "#1DA1F2",
        textColor: "#FFFFFF",
        name: "Twitter",
        url: "https://twitter.com/Tolgchu",
      },
      {
        color: "#FF5700",
        textColor: "#FFFFFF",
        name: "Reddit",
        url: "https://www.reddit.com/user/Tolgchu",
      },
      {
        color: "#1DB954",
        textColor: "#FFFFFF",
        name: "Spotify",
        url: "https://open.spotify.com/user/397g6w3fvaxxbb4ee124jun7t?si=1255dd3b42224788",
      },
    ],
    usedLanguages: ["Javascript", "Python", "C#"],
  },
  routes: [
    {
      invisible: true,
      name: "Home",
      description:
        "Hello, you can access my blog, portfolio or other necessary links from this page on this homepage.",
      to: "/",
    },
    {
      name: "Projects",
      description: "You can see my projects on this page.",
      to: "/projects",
    },
    {
      name: "Repositories",
      description:
        "On this page you can search and reach the projects I have developed open source in Github.",
      to: "/repositories",
    }
  ],
  projects: [
    {
      type: 'website',
      name: "discord.js v13 to v14 Converter",
      description: "A simple v13 to v14 code converter for discord.js.",
      to: "https://djs-v13-to-v14-converter.vercel.app/",
    }
  ],
  metaTags: {
    themeColor: "#0c011e",
    siteType: "personal",
    imagePath: "/avatar.webp",
  },
};
