import { Request, Response, NextFunction } from "express";

class User {
  async CadastroDeUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { email, userName, password } = request.body;
  }
}

export default User;
