import IClientRepository from "../repositories/IClientRepository";

const checkUserExists = async ( repository: IClientRepository, cnpj: string ) =>
{
    const userAlreadyExists = await repository.getClientByCNPJ( cnpj );
    return !!userAlreadyExists
};

export default checkUserExists;