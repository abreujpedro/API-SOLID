import DeletClientUserCase from "./DeleteClientUseCase";
import { Request, Response } from "express";

export default class DeleteClientController
{
  _useCase: DeletClientUserCase;
  constructor ( useCase: DeletClientUserCase )
  {
    this._useCase = useCase;
  }
  async handle ( request: Request, response: Response )
  {
    const cnpj = request.query.cnpj ? "" + request.query.cnpj : '';
    await this._useCase.execute( cnpj );
    return response.status( 204 ).end();
  }
}
