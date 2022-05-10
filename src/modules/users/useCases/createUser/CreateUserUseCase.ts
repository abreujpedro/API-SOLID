import encrypt from "../../../../utils/encrypt";
import IUserRepository from "../../repositories/IUserRepository";

interface IRequestCreateUser {
  name: string;
  email: string;
  picture: string;
  password: string;
}

export default class CreateUserUseCase {
  repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute({ name, email, picture, password }: IRequestCreateUser) {
    if (!email) {
      throw "Email incorrect";
    }
    const userAlreadyExists = await this.repository.getUSerByEmail(email);
    if (userAlreadyExists) {
      throw "User Already Exists";
    }
    try {
      const passwordHash = await encrypt(password);
      this.repository.createUser({
        name,
        email,
        picture,
        password: passwordHash,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
