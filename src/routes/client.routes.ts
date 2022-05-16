import { Router } from "express";
import createClientFactory from "../modules/clients/useCases/createClient";
import deleteClientFactory from "../modules/clients/useCases/deleteClient";
import getClientFactory from "../modules/clients/useCases/getClient";
import updateNameClientFactory from "../modules/clients/useCases/updateNameClient";

const clientRoutes = Router();
const createClientController = createClientFactory();
const getClientController = getClientFactory();
const deleteClientController = deleteClientFactory();
const updateNameClientController = updateNameClientFactory();

clientRoutes.get( "/client", ( req, res ) =>
  getClientController.handle( req, res )
);

clientRoutes.post( "/client", ( req, res ) =>
  createClientController.handle( req, res )
);

clientRoutes.delete( "/client", ( req, res ) =>
  deleteClientController.handle( req, res )
);

clientRoutes.patch( "/client", ( req, res ) =>
  updateNameClientController.handle( req, res )
);

export default clientRoutes;
