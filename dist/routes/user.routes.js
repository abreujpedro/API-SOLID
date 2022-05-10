"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../modules/users/useCases/createUser"));
const userRouter = (0, express_1.Router)();
const createUserControllerHere = (0, createUser_1.default)();
userRouter.post("/user", (req, res) => createUserControllerHere.handle(req, res));
exports.default = userRouter;
