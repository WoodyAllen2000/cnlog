import {defineCollection, reference, z} from 'astro:content';
import {POST_METADATA} from "@/consts.ts";

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    occupation: z.string().optional(),
    shortBio: z.string(),
    company: z.string().optional(),
    email: z.string().email(),
    twitter: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    layout: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(reference('tags')).default(['default']),
    lastmod: z.coerce.date().optional(),
    summary: z.string(),
    images: z.string().optional(),
  }),
});

const tags = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // TODO: Add support for images and layout
    // image: z.string().optional(),
    // layout: z.string().optional(),
  }),
});

export const collections = {blog, authors, tags};
