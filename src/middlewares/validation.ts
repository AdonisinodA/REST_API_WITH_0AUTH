import { Request, Response, NextFunction } from "express";
import { userSchema } from "../schemas";

class Validation {
  static async validarBody(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    await userSchema.validate(await request.body);

    next();
  }
}

export default new Validation();
