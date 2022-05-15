import CreateClientUseCase from "./CreateClientUseCase";
import { Request, Response } from "express";

export default class CreateClientController
{
  _useCase: CreateClientUseCase;
  constructor ( useCase: CreateClientUseCase )
  {
    this._useCase = useCase;
  }
  async handle ( request: Request, response: Response )
  {
    const {
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
      option,
    } = request.body;

      await this._useCase.execute( {
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
        option,
      } );
      return response.status( 201 ).end();
  }
}
