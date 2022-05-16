import takeGeoPosition from "../../../../externalAPIs/geoAPI/geoAPI";
import CustomError from "../../../../util/error/CustomError";
import IClientRepository from "../../repositories/IClientRepository";
import { requiredDatas, requiredLength } from "../../services/checkData";
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
    requiredDatas( [ name,
      cnpj,
      corporate_name,
      phone,
      address_name,
      cep,
      city,
      district,
      number,
      state, ] );

    requiredLength( cnpj, 14 );
    requiredLength( cep, 8 );

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
