import IClientRepository, {
  ICreateClientDTO,
} from "../../repositories/IClientRepository";

export default class CreateClientUserCase {
  repository: IClientRepository;
  constructor(repository: IClientRepository) {
    this.repository = repository;
  }

  async execute({ name, cnpj, corporateName, phone }: ICreateClientDTO) {
    if (!cnpj) {
      throw "CNPJ incorrect";
    }
    const userAlreadyExists = await this.repository.getClientByCNPJ(cnpj);
    if (userAlreadyExists) {
      throw "Client Already Exists";
    }
    try {
      this.repository.createClient({
        name,
        cnpj,
        corporateName,
        phone,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
