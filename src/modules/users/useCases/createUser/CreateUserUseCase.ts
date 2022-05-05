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
    execute ( { name, email, picture, password }: IRequestCreateUser )
    {
        console.log( "foi use case" );
        this.repository.createUser( { name, email, picture, password } );
    }
}