import { Router } from "express";
import { User } from "../controllers";
import { DomainError } from "../exceptions/errors";
const router = Router();

const ROUTE_BASE = "/user/";
const controller = new User();
router.get(`${ROUTE_BASE}cadastro`, controller.CadastroDeUsuario);
router.get(`/teste`, (req, res, next) => {
  next(Promise.reject(new DomainError("teste")));
});

export default router;
