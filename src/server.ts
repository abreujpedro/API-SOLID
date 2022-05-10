import express from "express";
import "dotenv/config";
import router from "./routes/routes";
import db from "./config/db";
import dependencyInjection from "./modules/users/useCases/createUser";

const app = express();
app.use(express.json());
// app.use(router);
(async () => {
  try {
    const port = process.env.PORT || 3000;
    await db.sync();
    app.get("/", (req, res) => res.send("oi"));

    const createUserControllerHere = dependencyInjection();

    app.post("/user", (req, res) => createUserControllerHere.handle(req, res));

    app.listen(port, () => {
      console.log("server on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
})();
