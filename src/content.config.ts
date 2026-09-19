import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        order: z.number().int().positive(),
        /** Which tab of the work section the project is listed under. */
        category: z.enum(['personal', 'professional']).default('personal'),
        title: z.string(),
        year: z.string(),
        role: z.string(),
        shot: z.string(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        repo: z.string().url().optional(),
        stack: z.array(z.string()).min(1),
      })
      .refine((data) => !data.cover || Boolean(data.coverAlt), {
        message: 'coverAlt is required whenever cover is set',
        path: ['coverAlt'],
      }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    order: z.number().int().positive(),
    when: z.string(),
    role: z.string(),
    org: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: ({ image }) =>
    z
      .object({
        portraitCaption: z.string(),
        portrait: image().optional(),
        portraitAlt: z.string().optional(),
        skills: z.array(z.string()).min(1),
      })
      .refine((data) => !data.portrait || Boolean(data.portraitAlt), {
        message: 'portraitAlt is required whenever portrait is set',
        path: ['portraitAlt'],
      }),
});

export const collections = { projects, timeline, about };
