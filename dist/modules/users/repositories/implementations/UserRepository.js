"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    constructor() { }
    createUser(userDetails) {
        console.log(userDetails);
    }
    ;
    static getInstance() {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository();
        }
        return UserRepository.INSTANCE;
    }
}
exports.default = UserRepository;
