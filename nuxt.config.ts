export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/brands.css'],

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  ogImage: {
    enabled: true,
  },

  image: {
    quality: 80,
    formats: ['webp', 'avif'],
  },

  fonts: {
    families: [
      {
        name: 'Cormorant Garamond',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
        italic: true,
      },
      {
        name: 'Manrope',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },

  site: {
    url: 'https://www.distriskin.com',
    name: 'DISTRISKIN',
    description: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
    defaultLocale: 'fr',
  },

  experimental: {
    payloadExtraction: false,
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/approche',
        '/equipe',
        '/contact',
        '/blog',
        '/marques/teslamed',
        '/marques/niance',
        '/marques/joadams',
      ],
    },
  },
})
