// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, // so fucking annoying
  app: {
    head: {
      title: 'Orchid Towny',
      meta: [
        { charset: 'utf-8' },
        { name: "Orchid Towny" },
        { hid: 'description', name: 'description', content: 'We’re a community built on the hope to make Minecraft a more accepting and comfortable place.' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  pages: true,
  modules: [
    '@nuxt/image',
  ]
})
