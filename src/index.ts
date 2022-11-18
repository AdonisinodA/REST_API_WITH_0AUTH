import express from "express";
import Routers from "./routes";
import { PORT, BANCO } from "./config";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares";

async function main() {
  await mongoose.connect(BANCO);
}
main().catch((err) => console.log(err));
const app = express();

app.use(express.json());
app.use(Routers);
app.use(errorHandler());

app.listen(PORT || 3001, () => {
  console.log("server on");
});
