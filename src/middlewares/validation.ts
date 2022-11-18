import { Request, Response, NextFunction } from "express";
import { userSchema } from "../schemas";
import { AnySchema } from "yup";

const validar =
  (schema: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await schema.validate(
        { body: request.body },
        { abortEarly: true }
      );
      console.log("🚀 ~ file: validation.ts ~ line 10 ~ result", result);
      // next();
    } catch (error: any) {
      const { ...err } = error;
      console.log("🚀 ~ file: validation.ts ~ line 17 ~ err", err);
      // next(error);
    }
  };

const validarQuery =
  (schema: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate({ body: request.params });
      next();
    } catch (error: any) {
      next(error);
    }
  };

export { validar, validarQuery };
