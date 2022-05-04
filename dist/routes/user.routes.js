"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../modules/users/useCases/createUser"));
const userRouter = (0, express_1.Router)();
userRouter.post("/", createUser_1.default.handle);
exports.default = userRouter;
