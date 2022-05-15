import GetClientUseCase from "./GetClientUseCase";
import { Request, Response } from "express";

export default class GetClientController
{
  _useCase: GetClientUseCase;
  constructor ( useCase: GetClientUseCase )
  {
    this._useCase = useCase;
  }
  async handle ( request: Request, response: Response )
  {
    const cnpj = request.query.cnpj ? "" + request.query.cnpj : undefined;
    try
    {
      const client = await this._useCase.execute( cnpj );
      return response.status( 200 ).json( client );
    } catch ( error )
    {
      throw error;
    }
  }
}
