import { Router } from "express";
import createUserController from "../modules/users/useCases/createUser";

const userRouter = Router();

userRouter.post( "/user", createUserController.handle );

export default userRouter;