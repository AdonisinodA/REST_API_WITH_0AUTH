import { User } from "../models";
import { Iuser } from "../models/UserModel";
import CryptoService from "./CryptoService";
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
    const newUser = await ModelService.criarModel(User, usuarioNovo);

    let token = await CryptoService.crypt(newUser._id);
    return token;
  }

  async login(login: ILogin) {
    const encontrarUsuario = await ModelService.buscarBanco(User, login.email);
    let token = "";
    if (encontrarUsuario) {
      token = await CryptoService.crypt(encontrarUsuario._id);
    }
    return {
      user: encontrarUsuario,
      token: token,
    };
  }
}

export default new UserService();
