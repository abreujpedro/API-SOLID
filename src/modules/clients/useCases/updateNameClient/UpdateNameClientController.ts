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
    const { cnpj, name } = request.body;

    await this._useCase.execute( cnpj, name );
    return response.status( 204 ).end();
  }
}
