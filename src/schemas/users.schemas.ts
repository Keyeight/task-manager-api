import { z } from "zod";

export const usersSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string().min(8).max(8),
});

export const usersSchemaOptional = usersSchema.partial();