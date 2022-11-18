import { Router } from "express";
import { User } from "../controllers";
import { validar } from "../middlewares/validation";
import { userSchema } from "../schemas";

const router = Router();

const ROUTE_BASE = "/user/";
const controller = new User();
router.post(
  `${ROUTE_BASE}cadastro`,
  validar(userSchema),
  controller.CadastroDeUsuario
);

export default router;
