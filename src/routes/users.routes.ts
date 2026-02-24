import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";
import { validate } from "../middleware/validate-schema.middleware";
import { usersSchema, usersSchemaOptional } from "../schemas/users.schemas";

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get("/getUsers", usersControllers.getUsers);
usersRouter.post("/createUser", validate(usersSchema), usersControllers.createUsers);
usersRouter.patch("/updateUser/:id",validate(usersSchemaOptional), usersControllers.updateUsers)

export { usersRouter };
