import IClientRepository from "../../repositories/IClientRepository";

export default class GetClientUserCase {
  repository: IClientRepository;
  constructor(repository: IClientRepository) {
    this.repository = repository;
  }

  async execute(cnpj: string | undefined) {
    if (!cnpj) {
      throw "CNPJ incorrect";
    }
    try {
      this.repository.getClientByCNPJ(cnpj);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
