import { Router } from "express";
import { User } from "../controllers";
import { validar } from "../middlewares/validation";
import { cadastroSchema, loginSchema } from "../schemas";

const router = Router();

const ROUTE_BASE = "/user/";
const controller = new User();
router.post(
  `${ROUTE_BASE}cadastro`,
  validar(cadastroSchema),
  controller.CadastroDeUsuario
);
router.post(`${ROUTE_BASE}login`, validar(loginSchema), controller.Login);

export default router;
