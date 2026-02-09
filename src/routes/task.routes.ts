import { Router } from "express";
import { TaskController } from "../controllers/task.controllers";

const router = Router();
const taskController = new TaskController();

router.get("/getTask", taskController.getTask)
router.post("/createTask", taskController.createTask);
router.patch("/updateTask/:id", taskController.updateTask)
router.delete("/deleteTask/:id", taskController.deleteTask);

export {router};