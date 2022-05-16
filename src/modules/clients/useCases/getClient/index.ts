import ClientRepository from "../../repositories/implementations/ClientRepository";
import GetClientController from "./GetClientController";
import GetClientUseCase from "./GetClientUseCase";

const getClientFactory = () =>
{
  const clientRepo = new ClientRepository();
  const getClientUseCase = new GetClientUseCase( clientRepo );
  const getClientController = new GetClientController( getClientUseCase );
  return getClientController;
};

export default getClientFactory;
