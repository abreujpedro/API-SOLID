import UserRepository from "../../repositories/implementations/UserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const userRepo = new UserRepository();
const createUserUseCase = new CreateUserUseCase( userRepo );
const createUserController = new CreateUserController( createUserUseCase );

export default createUserController;