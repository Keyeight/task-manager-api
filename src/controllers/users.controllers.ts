//create, read , update, delete
//vincular usuario + tabela task
import { Request, Response } from "express";
import { AppDataSource } from "../configs/db.config";
import { Users } from "../models/users.model";

export class UsersControllers {
  async getUsers(req: Request, res: Response) {
    try {
      const allUsers = await AppDataSource.manager.find(Users);

      return res.status(200).json({ code: 200, sucess: true, data: allUsers });
    } catch (error) {
      return res.status(500).json({ code: 500, sucess: false, data: error });
    }
  }
}
