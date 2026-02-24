import { Request, Response } from "express";
import { AppDataSource } from "../configs/db.config";
import { Users } from "../models/users.model";
import { Not } from "typeorm";
import bcrypt, { compareSync } from "bcrypt";
import { email, success } from "zod";
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
        email: req.body.email,
      });

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
        password: passwordHash,
      });
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

  async updateUsers(req: Request, res: Response) {
    const userID = await AppDataSource.manager.findOneBy(Users, {
      id: Number(req.params.id),
    });

    if (!userID) {
      return res
        .status(404)
        .json({ code: 404, success: false, message: "user not found" });
    }

    // if (req.body.password) {
    //   const passwordResp = req.body.password;

    //   const passwordHash = userID.password;

    //   const newPassword = compareSync(passwordResp, passwordHash);

    //   if (newPassword) {
    //     const userNewPassword = await AppDataSource.manager.findOneBy(Users, {
    //       password: req.body.password,
    //     });
    //   } else {
    //     return res.status(409).json({
    //       code: 409,
    //       sucess: false,
    //       message: "Não autorizado",
    //     });
    //   }
    // }

    if (req.body.email) {
      const userChangeEmail = await AppDataSource.manager.findOneBy(Users, {
        email: req.body.email,
      });

      if (userChangeEmail) {
        return res.status(409).json({
          code: 409,
          sucess: false,
          message: "Email já cadastrado",
        });
      }
    }

    const modificationUser = AppDataSource.manager.merge(
      Users,
      userID,
      req.body,
    );
    await AppDataSource.manager.save(modificationUser);

    return res.status(200).json({
      code: 200,
      message: "Dados alterados com sucesso",
    });
  }
}