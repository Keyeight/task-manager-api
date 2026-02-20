import { Request, Response } from "express";
import { AppDataSource } from "../configs/db.config";
import { Users } from "../models/users.model";
import bcrypt from "bcrypt";
export class UsersControllers {
  async getUsers(req: Request, res: Response) {
    try {
      const allUsers = await AppDataSource.manager.find(Users);

      return res.status(200).json({ code: 200, sucess: true, data: allUsers });
    } catch (error) {
      return res.status(500).json({ code: 500, sucess: false, data: error });
    }
  }

  async createUsers(req: Request, res: Response) {
    try {
      const userEmailExist = await AppDataSource.manager.findOneBy(Users, {
        email: req.body.email
      })

      if (userEmailExist) {
        return res.status(409).json({
          code: 409,
          sucess: false,
          message: "Usuário já cadastrado",
        });
      }
      
      const passwordHash = await bcrypt.hash(req.body.password, 10);

      const newUser = AppDataSource.manager.create(Users, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: passwordHash
      })
      await AppDataSource.manager.save(newUser);

      return res.status(201).json({
        code: 201,
        status: "success",
        message: "Criado com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        message: "Erro ao criar o usuário",
        data: error.message,
      });
    }
  }
//update - validar se usuario existe
//update - se quiser mudar a senha, verificar senha antiga e se estiver ok, pode alterar pela senha nova
//update - caso alterar email, verificar se email já existe no banco
//sem validação para nome e sobrenome
}
