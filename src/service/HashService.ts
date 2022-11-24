import { createHmac } from "crypto";

const hashPassword = (pass: string, email: string) => {
  return createHmac("sha256", pass).update(email).digest("base64");
};

export { hashPassword };
