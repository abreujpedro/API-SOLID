import CreateUserUseCase from "./CreateUserUseCase";
import { Request, Response } from "express";


export default class CreateUserController
{
    constructor ( public useCase: CreateUserUseCase )
    {
    }
    handle ( request: Request, response: Response )
    {
        const { name, email, picture, password } = request.body;
        console.log( name );
        this.useCase.execute( { name, email, picture, password } );
        return response.json( { foi: "foi" } );
    }
}