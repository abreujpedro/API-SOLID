import CreateClientUseCase from "./CreateClientUseCase";
import { Request, Response } from "express";
import { ICreateClientDTO } from "../../repositories/IClientRepository";

export default class CreateClientController {
  _useCase: CreateClientUseCase;
  constructor(useCase: CreateClientUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { name, cnpj, corporateName, phone }: ICreateClientDTO = request.body;
    try {
      await this._useCase.execute({ name, cnpj, corporateName, phone });
      return response.status(201).end();
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}
