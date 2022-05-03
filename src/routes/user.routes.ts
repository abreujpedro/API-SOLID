import { Router } from "express";
import createUserController from "../modules/users/useCases/createUser";

const userRouter = Router();

userRouter.post( "/", createUserController.handle );

export default userRouter;