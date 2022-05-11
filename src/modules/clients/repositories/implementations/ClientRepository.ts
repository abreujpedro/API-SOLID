import Client from "../../model/clientModel";
import IClientRepository, { ICreateClientDTO } from "../IClientRepository";

export default class ClientRepository implements IClientRepository {
  async createClient({ name, cnpj, corporateName, phone }: ICreateClientDTO) {
    await Client.create({ name, cnpj, corporateName, phone });
  }
  async getClientByCNPJ(cnpj: String) {
    const client = await Client.findOne({ where: { cnpj } });
    return client;
  }
  async getAllClient() {
    const client = await Client.findAll();
    return client;
  }
  async deleteClientByCNPJ(cnpj: String) {
    await Client.destroy({ where: { cnpj } });
  }
}
