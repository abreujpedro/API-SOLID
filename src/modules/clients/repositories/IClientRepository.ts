export interface ICreateClientDTO {
  cnpj: string;
  corporate_name: string;
  name: string;
  phone: string;
  address_name: string;
  number: string;
  option?: string;
  district: string;
  city: string;
  state: string;
  cep: string;
  latitude?: string;
  longitude?: string;
}

export default interface IClientRepository {
  createClient: (userDetails: ICreateClientDTO) => Promise<unknown>;
  getClientByCNPJ: (cnpj: string) => Promise<unknown>;
  getAllClient: () => Promise<unknown>;
  deleteClientByCNPJ: (cnpj: string) => Promise<unknown>;
}
