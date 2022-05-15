import { Router } from "express";
import createClientFactory from "../modules/clients/useCases/createClient";
import getClientFactory from "../modules/clients/useCases/getClient";

const clientRoutes = Router();
const createClientControllerHere = createClientFactory();
const getClientControllerHere = getClientFactory();

clientRoutes.get( "/client", ( req, res, next ) =>
{
  getClientControllerHere.handle( req, res );
} );

clientRoutes.post( "/client", ( req, res ) =>
  createClientControllerHere.handle( req, res )
);

export default clientRoutes;
