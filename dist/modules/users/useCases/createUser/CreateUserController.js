"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    handle(request, response) {
        const { name, email, picture, password } = request.body;
        this.useCase.execute({ name, email, picture, password });
        return response.json({ foi: "foi" });
    }
}
exports.default = CreateUserController;
