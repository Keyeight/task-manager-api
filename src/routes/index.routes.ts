import { Router } from "express";
import { tasksRouter } from "./tasks.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/task", tasksRouter);
router.use("/user", usersRouter);

export { router };
