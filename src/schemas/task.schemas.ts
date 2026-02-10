import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
})


