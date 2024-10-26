// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Floralink",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.svg",
        },
      ],
      htmlAttrs: {
        lang: "de",
      },
    },
  },

  compatibilityDate: "2024-10-12",
  ssr: false,
  modules: ["@pinia/nuxt"],
});