import {z, defineCollection} from 'astro:content';

export const collections = {
    'recipies': defineCollection({
        type: "content",
        schema: ({image}) => z.object({
            title: z.string(),
            short_description: z.string(),
            tags: z.array(z.string()),
            image: image(),
            ingredients: z.array(
                z.object({name: z.string(), amount: z.string()})
            ).nullable()
        })
    })
};