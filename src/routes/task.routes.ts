import { Router } from "express";
import { TaskController } from "../controllers/task.controllers";
import { validate } from "../middleware/validate-schema.middleware";
import { createTaskSchema } from "../schemas/task.schemas";

const router = Router();
const taskController = new TaskController();

router.get("/getTask", taskController.getTask);
router.post("/createTask", validate(createTaskSchema), taskController.createTask);
router.patch("/updateTask/:id", taskController.updateTask);
router.delete("/deleteTask/:id", taskController.deleteTask);

export { router };
