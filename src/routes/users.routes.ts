import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get("/getUsers", usersControllers.getUsers);

export { usersRouter };
