import { title } from "node:process";
import { AppDataSource } from "../configs/db.config";
import { Tasks } from "../models/tasks.model";
import { Request, Response } from "express";


export class TasksController {
  async getTask(req: Request, res: Response) {
    try {
      const allTask = await AppDataSource.manager.find(Tasks);

      return res.status(200).json({ code: 200, sucess: true, data: allTask });
    } catch (error) {
      return res.status(500).json({ code: 500, sucess: false, data: error });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const newTask = AppDataSource.manager.create(Tasks, {
        title: req.body.title,
        description: req.body.description,
        status: "pending",
      });
      await AppDataSource.manager.save(newTask);

      return res.status(201).json({ code: 201, sucess: true, data: newTask });
    } catch (error) {
      return res.status(500).json({ code: 500, sucess: false, data: error });
    }
  }

  async updateTask(req: Request, res: Response) {
    const task = await AppDataSource.manager.findOneBy(Tasks, {
      id: Number(req.params.id),
    });

    if (!task) {
      return res
        .status(404)
        .json({ code: 404, sucess: false, message: "task not found" });
    }

    const modificationTask = AppDataSource.manager.merge(Tasks, task, req.body);
    await AppDataSource.manager.save(modificationTask);

    return res
      .status(200)
      .json({ code: 200, sucess: true, data: modificationTask });
  }

  async deleteTask(req: Request, res: Response) {
    const task = await AppDataSource.manager.findOneBy(Tasks, {
      id: Number(req.params.id),
    });

    if (!task) {
      return res
        .status(404)
        .json({ code: 404, sucess: false, message: "task not found" });
    }

    await AppDataSource.manager.delete(Tasks, task.id);

    return res
      .status(200)
      .json({ code: 200, sucess: true, message: "task delete sucess" });
  }
}