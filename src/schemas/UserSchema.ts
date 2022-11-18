import { object, string, number, date, InferType } from "yup";

export let userSchema = object({
  body: object({
    userName: string().required(),
    email: string().email().required(),
    password: string().nullable().required(),
  }),
});

export type UserSchema = InferType<typeof userSchema>;
/* {
  name: string;
  age: number;
  email?: string | undefined
  website?: string | null | undefined
  createdOn: Date
}*/
