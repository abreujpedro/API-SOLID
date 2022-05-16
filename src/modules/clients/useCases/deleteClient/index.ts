import ClientRepository from "../../repositories/implementations/ClientRepository";
import DeleteClientController from "./DeleteClientController";
import DeleteClientUseCase from "./DeleteClientUseCase";

const deleteClientFactory = () =>
{
  const clientRepo = new ClientRepository();
  const deleteClientUseCase = new DeleteClientUseCase( clientRepo );
  const deleteClientController = new DeleteClientController( deleteClientUseCase );
  return deleteClientController;
};

export default deleteClientFactory;
