import express from "express";
import "dotenv/config";
import router from "./routes/routes";
import db from "./config/db";
import createClientFactory from "./modules/clients/useCases/createClient";
import getClientFactory from "./modules/clients/useCases/getClient";

const app = express();
app.use(express.json());
// app.use(router);
(async () => {
  try {
    const port = process.env.PORT || 3000;
    await db.sync();
    app.get("/", (req, res) => res.send("oi"));

    const createClientControllerHere = createClientFactory();
    const getClientControllerHere = getClientFactory();

    app.get("/client", (req, res) => getClientControllerHere.handle(req, res));

    app.post("/client", (req, res) =>
      createClientControllerHere.handle(req, res)
    );

    app.listen(port, () => {
      console.log("server on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
})();
