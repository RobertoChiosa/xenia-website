// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Xenia",
      meta: [
        { name: "description", content: "Xenia" },
      ],
    },
  },
  nitro: {
    preset: "cloudflare-pages",
  },
  colorMode: {
    preference: "light",
  },
});
