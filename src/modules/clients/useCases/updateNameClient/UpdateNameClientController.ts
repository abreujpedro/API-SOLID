import UpdateNameClientUseCase from "./UpdateNameClientUseCase";
import { Request, Response } from "express";

export default class UpdateNameClientController
{
  _useCase: UpdateNameClientUseCase;
  constructor ( useCase: UpdateNameClientUseCase )
  {
    this._useCase = useCase;
  }
  async handle ( request: Request, response: Response )
  {
    console.log( "entrei controller -------------------------" );
    const { cnpj, name } = request.body;

    const client = await this._useCase.execute( cnpj, name );
    return response.status( 200 ).json( client );
  }
}
