import express from "express";
import Routers from "./routers";
import { PORT } from "../config";
const app = express();

app.use(express.json());
app.use(Routers);

app.listen(PORT || 3001, () => {
  console.log("server on");
});
