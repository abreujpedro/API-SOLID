import CreateUserUseCase from "./CreateUserUseCase";
import { Request, Response } from "express";

export default class CreateUserController {
  _useCase: CreateUserUseCase;
  constructor(useCase: CreateUserUseCase) {
    this._useCase = useCase;
  }
  async handle(request: Request, response: Response) {
    const { name, email, picture, password } = request.body;
    await this._useCase.execute({ name, email, picture, password });
    return response.status(201).end();
  }
}
