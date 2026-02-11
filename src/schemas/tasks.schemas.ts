import { z } from "zod";

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.string(),
})

export const taskSchemaOptional = taskSchema.partial();