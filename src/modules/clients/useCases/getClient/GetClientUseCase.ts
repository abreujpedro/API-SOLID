import IClientRepository from "../../repositories/IClientRepository";

export default class GetClientUserCase {
  repository: IClientRepository;
  constructor(repository: IClientRepository) {
    this.repository = repository;
  }

  async execute(cnpj: string | undefined) {
    if (!cnpj) {
      try {
        console.log("use case withou cnpj get");
        const clients = await this.repository.getAllClient();
        return clients;
      } catch (error: any) {
        throw new Error(error);
      }
    }
    try {
      const client = await this.repository.getClientByCNPJ(cnpj);
      return client;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
