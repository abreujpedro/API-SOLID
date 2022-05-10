import { Router } from "express";
import dependencyInjection from "../modules/users/useCases/createUser";

const userRouter = Router();
const createUserControllerHere = dependencyInjection();
userRouter.post("/user", (req, res) =>
  createUserControllerHere.handle(req, res)
);

export default userRouter;
