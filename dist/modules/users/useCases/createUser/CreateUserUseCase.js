"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(objRequest) {
        this.repository.createUser(objRequest);
    }
}
exports.default = CreateUserUseCase;
