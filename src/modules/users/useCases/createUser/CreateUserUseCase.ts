import IUserRepository from "../../repositories/IUserRepository";

interface IRequestCreateUser
{
    name: string;
    email: string;
    picture: string;
    password: string;
}


export default class CreateUserUseCase
{
    constructor ( private repository: IUserRepository ) { }
    execute ( objRequest :IRequestCreateUser)
    {
        this.repository.createUser(objRequest)
    }
}