import express from "express";
import "dotenv/config";
import router from "./routes/routes";
import db from "./config/db";
import createUserController from "./modules/users/useCases/createUser";

const app = express();

app.use( express.json() );
// app.use( router );

const port = process.env.PORT || 3000;

db.sync();

app.post( "/user", createUserController.handle );

app.listen( port, () => { console.log( "server on port ", port ); } );

