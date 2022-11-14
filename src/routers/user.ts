import { Router } from "express";

const router = Router();

const ROUTE_BASE = "/user/";

router.get(`${ROUTE_BASE}teste`, (req, res) => {
  res.send("funcionando");
});

export default router;
