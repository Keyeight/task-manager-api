import { z } from "zod"
import { title } from "node:process";
import { createTaskSchema } from "../schemas/task.schemas";
import { NextFunction, Request, Response } from "express";

export const validate = (schema: z.ZodObject<any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bodyRequest = req.body
            await schema.parseAsync(bodyRequest);

            next()
        } catch (error) {
            if(error instanceof z.ZodError) {
                return res
                  .status(400)
                  .json({ code: 400, sucess: false, data: error.issues });
            }
        }
    }
}
