import { z, defineCollection } from "astro:content";

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        location: z.string(),
        employer: z.string(),
        dateStart: z.string(),
        dateEnd: z.string(),
        bullets: z.array(z.string()),
    })

});
const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        href: z.string(),
        title: z.string(),
        location: z.string(),
        employer: z.string(),
        dateStart: z.string(),
        dateEnd: z.string(),
        bullets: z.array(z.string()),
    })

});

export const collections = {
    'work': workCollection,
    'projects': projectCollection,
};
