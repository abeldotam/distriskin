import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        category: z.enum(['tendances', 'marques', 'expertise', 'partenaires']),
        date: z.date(),
        featured: z.boolean().default(false),
        readTime: z.string().optional(),
        image: z.string().optional(),
      }),
    }),
    legal: defineCollection({
      type: 'page',
      source: 'legal/**/*.md',
    }),
  },
})
