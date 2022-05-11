import GetClientUseCase from "./GetClientUseCase";
import { Request, Response } from "express";
import { ICreateClientDTO } from "../../repositories/IClientRepository";

export default class GetClientController {
  _useCase: GetClientUseCase;
  constructor(useCase: GetClientUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { cnpj }: { cnpj: string | undefined } = request.body;
    try {
      await this._useCase.execute(cnpj);
      return response.status(201).end();
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}
