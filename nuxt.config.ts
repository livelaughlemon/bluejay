// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, // so fucking annoying
  app: {
    head: {
      title: 'Orchid Towny',
      meta: [
        { name: "Orchid Towny", content: "play.orchidmc.me" }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  pages: true
})
