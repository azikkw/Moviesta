// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  app: {
    head: {
      title: "Moviesta",
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: 'Discover, track, and enjoy your favorite movies with personalized recommendations and the latest film news, all in one website.'
        }
      ]
    }
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  runtimeConfig: {
    movieDbKey: process.env.MOVIEDB_API_KEY,
  },
})