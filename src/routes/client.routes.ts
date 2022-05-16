import { Router } from "express";
import createClientFactory from "../modules/clients/useCases/createClient";
import deleteClientFactory from "../modules/clients/useCases/deleteClient";
import getClientFactory from "../modules/clients/useCases/getClient";

const clientRoutes = Router();
const createClientController = createClientFactory();
const getClientController = getClientFactory();
const deleteClientController = deleteClientFactory();

clientRoutes.get( "/client", ( req, res ) =>
  getClientController.handle( req, res )
);

clientRoutes.post( "/client", ( req, res ) =>
  createClientController.handle( req, res )
);

clientRoutes.delete( "/client", ( req, res ) =>
  deleteClientController.handle( req, res )
);

export default clientRoutes;
