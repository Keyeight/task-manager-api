import { Router } from "express";
import { TasksController } from "../controllers/tasks.controllers";
import {
  validate,
} from "../middleware/validate-schema.middleware";
import { taskSchema, taskSchemaOptional } from "../schemas/tasks.schemas";

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.get("/getTask", tasksController.getTask);
tasksRouter.post("/createTask", validate(taskSchema), tasksController.createTask);
tasksRouter.patch(
  "/updateTask/:id",
  validate(taskSchemaOptional),
  tasksController.updateTask,
);
tasksRouter.delete("/deleteTask/:id", tasksController.deleteTask);

export { tasksRouter };
