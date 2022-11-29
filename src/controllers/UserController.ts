import { Request, Response, NextFunction } from "express";
import { Iuser } from "../models/UserModel";
import { CadastroSchema, LoginSchema } from "../schemas";
import { compararPassword, hashPassword, UserService } from "../service";

class User {
  async CadastroDeUsuario(
    request: Request<{}, {}, CadastroSchema["body"]>,
    response: Response,
    next: NextFunction
  ) {
    try {
      const result = await UserService.cadastroUsuario(request.body);
      response.locals.authorization = result;
      response.status(200).json("sucesso");
    } catch (error: any) {
      next(error);
    }
  }

  async Login(
    request: Request<{}, {}, LoginSchema["body"]>,
    response: Response,
    next: NextFunction
  ) {
    try {
      const result: { token: string; user: Iuser } = await UserService.login(
        request.body
      );
      const comparacaoHash = compararPassword(
        result.user.password,
        request.body
      );
      if (comparacaoHash) {
        response.locals.authorization = result.token;
        return response.status(200).json("logado");
      }
      next({
        message: "Erro de autenticação",
        status: 500,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default User;
