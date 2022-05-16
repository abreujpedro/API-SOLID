import ClientRepository from "../../repositories/implementations/ClientRepository";
import UpdateNameClientController from "./UpdateNameClientController";
import UpdateNameClientUseCase from "./UpdateNameClientUseCase";

const updateNameClientFactory = () =>
{
  const clientRepo = new ClientRepository();
  const updateNameClientUseCase = new UpdateNameClientUseCase( clientRepo );
  const updateNameClientController = new UpdateNameClientController( updateNameClientUseCase );
  return updateNameClientController;
};

export default updateNameClientFactory;
