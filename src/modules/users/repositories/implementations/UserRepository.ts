import IUserRepository, { ICreateUserDTO } from "../IUserRepository";

export default class UserRepository implements IUserRepository
{

    private constructor () { }
    private static INSTANCE: UserRepository;
    createUser ( userDetails: ICreateUserDTO )
    {
        console.log( userDetails );
    };


    public static getInstance (): UserRepository
    {
        if ( !UserRepository.INSTANCE )
        {
            UserRepository.INSTANCE = new UserRepository();
        }
        return UserRepository.INSTANCE;
    }
}