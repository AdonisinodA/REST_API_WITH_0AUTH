import { createHmac } from "crypto";

const hashPassword = (user: any) => {
  return createHmac("sha256", user.password)
    .update(user.email)
    .digest("base64");
};

const compararPassword = (password: any, loginRequest: any) => {
  const resultHash = createHmac("sha256", loginRequest.password)
    .update(loginRequest.email)
    .digest("base64");

  if (resultHash == password) {
    return true;
  }
  return false;
};

export { hashPassword, compararPassword };
