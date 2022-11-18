import { Router } from "express";
import { User } from "../controllers";
const router = Router();

const ROUTE_BASE = "/user/";
const controller = new User();
router.get(`${ROUTE_BASE}cadastro`, controller.CadastroDeUsuario);

export default router;
