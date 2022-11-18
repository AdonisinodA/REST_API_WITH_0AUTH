import {
  NotFoundError,
  ValidationError,
  ConflictError,
} from "../exceptions/errors";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

const validationsToCause = (validations: any) =>
  validations.map(({ message, context: { label } }) => ({
    message,
    field: label,
  }));

const responseMappers = {
  [NotFoundError.name]: (error: any) => ({
    status: 404,
    body: {
      statusCode: 404,
      error: NotFoundError.name,
      message: error.message,
      cause: [],
    },
  }),
  [ValidationError.name]: (error: any) => ({
    status: 400,
    body: {
      statusCode: 400,
      error: ValidationError.name,
      message: error.message,
      cause: validationsToCause(error.validations ?? []),
    },
  }),
  [ConflictError.name]: (error: any) => ({
    status: 409,
    body: {
      statusCode: 409,
      error: ConflictError.name,
      message: error.message,
      cause: [],
    },
  }),
  default: (error: any) => ({
    status: 500,
    body: {
      statusCode: 500,
      error: error.name ?? "UnexpectedError",
      message: error.message,
      cause: [],
    },
  }),
};

const errorToResponse = (error: any) => {
  const mapper = responseMappers[error.name] ?? responseMappers.default;
  return mapper(error);
};

const errorHandler =
  (log = console.log) =>
  (
    error: ErrorRequestHandler,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    log(error);
    const { status, body } = errorToResponse(error);
    response.status(status).send(body);
  };

export { errorHandler };
