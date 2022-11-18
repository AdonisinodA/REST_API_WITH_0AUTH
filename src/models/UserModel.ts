import mongoose from "mongoose";
const { Schema } = mongoose;

interface IuserSchema {
  email: string;
  password: string;
  userName: string;
  createAt?: number;
  updateAt?: number;
}
export interface ChatLogDocument extends Omit<IChatLog, "_id">, Document {}
type testeI = mongoose.InferSchemaType<typeof userSchema>;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userName: { type: String, required: true },
  createAt: { type: Number },
  updateAt: { type: Number },
});

userSchema.pre("save", async function (next: any) {
  let user = this as testeI;
  user.createAt = new Date().getTime();
  user.updateAt = new Date().getTime();
  return next();
});

userSchema.pre("updateOne", async function (next: any) {
  let user = this as testeI;
  user.updateAt = new Date().getTime();
  return next();
});

export const User = mongoose.model("user", userSchema);
