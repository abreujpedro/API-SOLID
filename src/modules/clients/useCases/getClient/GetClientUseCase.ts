import CustomError from "../../../../util/error/CustomError";
import IClientRepository from "../../repositories/IClientRepository";
import checkUserExists from "../../services/checkUserExists";

export default class GetClientUserCase
{
  repository: IClientRepository;
  constructor ( repository: IClientRepository )
  {
    this.repository = repository;
  }

  async execute ( cnpj: string | undefined )
  {
    if ( !cnpj )
    {
      try
      {
        const clients = await this.repository.getAllClient();
        return clients;
      } catch ( error: any )
      {
        throw new Error( error );
      }
    }

    const userAlreadyExists = await checkUserExists( this.repository, cnpj );
    if ( !!userAlreadyExists )
    {
      throw new CustomError( `There is no client with CNPJ:${cnpj}`, 400 );
    }

    try
    {
      const client = await this.repository.getClientByCNPJ( cnpj );
      return client;
    } catch ( error: any )
    {
      throw new Error( error );
    }
  }
}
