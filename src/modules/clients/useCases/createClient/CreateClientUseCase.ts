import takeGeoPosition from "../../../../externalAPIs/geoAPI/geoAPI";
import CustomError from "../../../../util/error/CustomError";
import IClientRepository from "../../repositories/IClientRepository";
import checkUserExists from "../../services/checkUserExists";

export default class CreateClientUserCase
{
  repository: IClientRepository;
  constructor ( repository: IClientRepository )
  {
    this.repository = repository;
  }

  async execute ( {
    name,
    cnpj,
    corporate_name,
    phone,
    address_name,
    cep,
    city,
    district,
    number,
    state,
    option
  }: {
    [ key: string ]: string;
  } )
  {
    if ( !cnpj )
    {
      throw new CustomError( "CNPJ incorrect", 400 );
    }
    const userAlreadyExists = await checkUserExists( this.repository, cnpj );
    if ( userAlreadyExists )
    {
      throw new CustomError( "Client Already Exists", 400 );
    }
    try
    {
      const { latitude, longitude } = await takeGeoPosition( { address_name, city, number } );
      this.repository.createClient( {
        name,
        cnpj,
        corporate_name,
        phone,
        address_name,
        cep,
        city,
        district,
        number,
        state,
        latitude,
        longitude,
        option
      } );
    } catch ( error )
    {
      throw error;
    }
  }
}
