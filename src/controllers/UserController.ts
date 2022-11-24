import { Request, Response, NextFunction } from "express";
import { UserSchema } from "../schemas";
import { hashPassword, UserService } from "../service";

class User {
  async CadastroDeUsuario(
    request: Request<{}, {}, UserSchema["body"]>,
    response: Response,
    next: NextFunction
  ) {
    try {
      UserService.cadastroUsuario(request.body);
      response.status(200).json("sucesso");
    } catch (error: any) {
      next(error);
    }
  }
}

export default User;
