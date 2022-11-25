import { User } from "../models";
import { Iuser } from "../models/UserModel";
import { hashPassword } from "./HashService";
import ModelService from "./ModelService";

interface IUser {
  email: string;
  userName: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}
class UserService {
  async cadastroUsuario(user: IUser) {
    const result = hashPassword({ password: user.password, email: user.email });
    const usuarioNovo = { ...user, password: result };
    await ModelService.criarModel(User, usuarioNovo);
  }

  async login(login: ILogin): Promise<Iuser> {
    const encontrarUsuario = await ModelService.buscarBanco(User, login.email);
    return encontrarUsuario;
  }
}

export default new UserService();
