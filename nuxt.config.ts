// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-12",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],
  runtimeConfig: {
    public: {
      imprintName: "",
      imprintAddress: "",
      imprintEmail: "",
    },
  },
  ssr: false,

  // Meta
  site: {
    url: "www.flora-link.de",
    name: "Floralink",
    description:
      "Floralink ist ein Online-Tool zur statistischen Auswertung von floristischen Kartierungen. Die Ergebnisse können dann mit taxonspezifischen Daten (wie die Zeigerwerte nach Ellenberg oder der Rote-Liste-Status) verknüpft werden. Daraus werden Lage- und Streuungsmaße berechnet und in Diagrammen visualisiert.",
    defaultLocale: "de",
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg",
        },
      ],
    },
  },

  // SEO
  seo: {
    fallbackTitle: false,
    redirectToCanonicalSiteUrl: true,
  },
  routeRules: {
    "/report/**": { robots: false },
    "/floralink/imprint": { robots: false },
  },
  ogImage: { enabled: false },
});
