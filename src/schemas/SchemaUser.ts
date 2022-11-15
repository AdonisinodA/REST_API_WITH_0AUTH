import { object, string, number, date, InferType } from "yup";

export let userSchema = object({
  userName: string().required(),
  email: string().email(),
  passWord: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

export type UserSchema = InferType<typeof userSchema>;
/* {
  name: string;
  age: number;
  email?: string | undefined
  website?: string | null | undefined
  createdOn: Date
}*/
