import { User } from "../models";
import { hashPassword } from "./HashService";
import ModelService from "./ModelService";

interface IUser {
  email: string;
  userName: string;
  password: string;
}

class UserService {
  async cadastroUsuario(user: IUser) {
    const result = hashPassword(user.password, user.email);
    const usuarioNovo = { ...user, password: result };

    console.log(
      "🚀 ~ file: UserService.ts ~ line 15 ~ UserService ~ cadastroUsuario ~ usuarioNovo",
      usuarioNovo
    );
    ModelService.criarModel(User, usuarioNovo);
  }
}

export default new UserService();
