import { Router } from "express";
import { UserController } from "../controller";
const router = Router();

const ROUTE_BASE = "/user/";
const controller = new UserController();
router.get(`${ROUTE_BASE}cadastro`, controller.CadastroDeUsuario);

export default router;
