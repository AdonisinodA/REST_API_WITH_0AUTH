import { Request, Response, NextFunction } from "express";
import { CadastroSchema, LoginSchema } from "../schemas";
import { compararPassword, hashPassword, UserService } from "../service";

class User {
  async CadastroDeUsuario(
    request: Request<{}, {}, CadastroSchema["body"]>,
    response: Response,
    next: NextFunction
  ) {
    try {
      await UserService.cadastroUsuario(request.body);
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
      const result = await UserService.login(request.body);
      const comparacaoHash = compararPassword(result.password, request.body);
      if (comparacaoHash) {
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
