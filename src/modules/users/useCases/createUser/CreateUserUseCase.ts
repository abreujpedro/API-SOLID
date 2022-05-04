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
    public _repository;
    constructor ( repository: IUserRepository ) { this._repository = repository; }
    execute ( { name, email, picture, password }: IRequestCreateUser )
    {
        console.log( "foi use case" );
        this._repository.createUser( { name, email, picture, password } );
    }
}