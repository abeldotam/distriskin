export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/brands.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  ogImage: {
    enabled: true,
  },

  image: {
    quality: 90,
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
    url: 'https://distriskin.com',
    name: 'DISTRISKIN',
    description: 'Distriskin, distributeur de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
    defaultLocale: 'fr',
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'ClaudeBot', 'PerplexityBot', 'ChatGPT-User'],
        allow: '/',
      },
    ],
  },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
    },
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
        '/mentions-legales',
        '/confidentialite',
      ],
    },
  },
})
