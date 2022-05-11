export interface ICreateClientDTO {
  cnpj: string;
  corporateName: string;
  name: string;
  phone: string;
}

export default interface IClientRepository {
  createClient: (userDetails: ICreateClientDTO) => Promise<unknown>;
  getClientByCNPJ: (cnpj: String) => Promise<unknown>;
  getAllClient: () => Promise<unknown>;
  deleteClientByCNPJ: (cnpj: String) => Promise<unknown>;
}
