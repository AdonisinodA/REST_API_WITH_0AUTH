import { Request, Response, NextFunction } from "express";

class UserController {
  async CadastroDeUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { email, userName, passWord } = request.body;
  }
}

export default UserController;
