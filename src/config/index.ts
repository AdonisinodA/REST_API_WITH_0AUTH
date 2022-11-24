import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const BANCO = process.env.BANCO;
export const Secret = process.env.KEY_SECRET;
