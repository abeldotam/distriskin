// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  site: {
    url: 'https://www.distriskin.com',
    name: 'DISTRISKIN',
    description: 'Distributeur français de produits premium pour le soin et le bien-être',
    defaultLocale: 'fr',
    indexable: true,
    trailingSlash: false,
  },

  googleFonts: {
    families: {
      'Montserrat': [200, 300, 400, 500, 600, 700],
      'Cormorant Garamond': {
        ital: [300, 400],
        wght: [300, 400, 500, 600],
      },
    },
    display: 'swap',
  },

  image: {
    format: ['webp'],
    quality: 80,
  },

  ogImage: {
    zeroRuntime: true,
    defaults: {
      renderer: 'satori',
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      titleTemplate: '%s',
    },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
