import { Router } from "express";
import dependencyInjection from "../modules/clients/useCases/createClient";

const userRouter = Router();
const createUserControllerHere = dependencyInjection();
userRouter.post("/user", (req, res) =>
  createUserControllerHere.handle(req, res)
);

export default userRouter;
