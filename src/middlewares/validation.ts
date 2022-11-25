import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validar =
  (schema: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await schema.validate(
        { body: request.body },
        { abortEarly: true }
      );
      next();
    } catch (error: any) {
      next(error);
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
