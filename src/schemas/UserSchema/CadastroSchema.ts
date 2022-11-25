import { object, string, number, date, InferType } from "yup";

export let cadastroSchema = object({
  body: object({
    userName: string().required().trim(),
    email: string().email().required().trim(),
    password: string().nullable().required().trim(),
  }),
});

export type CadastroSchema = InferType<typeof cadastroSchema>;
