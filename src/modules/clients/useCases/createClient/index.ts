import ClientRepository from "../../repositories/implementations/ClientRepository";
import CreateClientController from "./CreateClientController";
import CreateClientUseCase from "./CreateClientUseCase";

const createClientFactory = () => {
  const clientRepo = new ClientRepository();
  const createClientUseCase = new CreateClientUseCase(clientRepo);
  const createClientController = new CreateClientController(
    createClientUseCase
  );
  return createClientController;
};

export default createClientFactory;
