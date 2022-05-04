export interface ICreateUserDTO
{
    name: string;
    email: string;
    picture: string;
    password: string;
}

export default interface IUserRepository
{
    createUser: ( userDetails: ICreateUserDTO ) => Promise<void>;
}