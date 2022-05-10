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
    try {
      this.repository.createUser({ name, email, picture, password });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
