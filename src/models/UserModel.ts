import mongoose from "mongoose";
const { Schema } = mongoose;

interface IuserSchema {
  email: string;
  password: string;
  userName: string;
  createAt?: number;
  updateAt?: number;
}
export type Iuser = mongoose.InferSchemaType<typeof userSchema>;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  createAt: { type: Number },
  updateAt: { type: Number },
});

userSchema.pre("save", async function (next: any) {
  let user = this as Iuser;
  user.createAt = new Date().getTime();
  user.updateAt = new Date().getTime();
  return next();
});

userSchema.pre("updateOne", async function (next: any) {
  let user = this as unknown as Iuser;
  user.updateAt = new Date().getTime();
  return next();
});

export const User = mongoose.model("user", userSchema);
