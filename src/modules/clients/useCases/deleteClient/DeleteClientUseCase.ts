import CustomError from "../../../../util/error/CustomError";
import IClientRepository from "../../repositories/IClientRepository";
import checkUserExists from "../../services/checkUserExists";

export default class DeletClientUserCase
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

      throw new CustomError( "CNPJ incorrect", 400 );

    }

    const userAlreadyExists = await checkUserExists( this.repository, cnpj );
    if ( userAlreadyExists )
    {
      try
      {
        this.repository.deleteClientByCNPJ( cnpj );
      } catch ( error: any )
      {
        throw new Error( error );
      }
    } else
    {
      throw new CustomError( `There is no client with CNPJ:${cnpj}`, 400 );
    };


  }
}
