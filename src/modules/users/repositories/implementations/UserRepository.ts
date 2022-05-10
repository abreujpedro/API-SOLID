import User from "../../model/userModel";
import IUserRepository, { ICreateUserDTO } from "../IUserRepository";

export default class UserRepository implements IUserRepository {
  async createUser({ name, password, email, picture }: ICreateUserDTO) {
    await User.create({ name, password, email, picture });
  }
  async getUSerByEmail(email: String) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}
