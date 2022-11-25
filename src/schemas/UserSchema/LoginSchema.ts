import { object, string, number, date, InferType } from "yup";

export let loginSchema = object({
  body: object({
    email: string().email().required().trim(),
    password: string().nullable().required().trim(),
  }),
});

export type LoginSchema = InferType<typeof loginSchema>;
