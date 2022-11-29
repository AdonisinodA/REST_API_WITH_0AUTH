import * as jwt from "jsonwebtoken";
import { Secret } from "../config";

class CryptoService {
  async crypt(value: any) {
    let token = jwt.sign({}, Secret, { expiresIn: 60 * 20, subject: value });
    return token;
  }
  async descrypt(value: any) {
    jwt.verify(value, Secret, function (err, decoded) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return {
            message: "token expirado",
            status: 500,
          };
        }
      }
      return decoded;
    });
  }
}

export default new CryptoService();
