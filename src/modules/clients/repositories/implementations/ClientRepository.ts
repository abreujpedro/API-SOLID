import Address from "../../../address/model/addressModel";
import Client from "../../model/clientModel";
import IClientRepository, { ICreateClientDTO } from "../IClientRepository";

export default class ClientRepository implements IClientRepository {
  async createClient({
    name,
    cnpj,
    corporate_name,
    phone,
    address_name,
    cep,
    city,
    district,
    number,
    state,
    latitude,
    longitude,
    option,
  }: ICreateClientDTO) {
    const client = await Client.create({ name, cnpj, corporate_name, phone });

    await Address.create({
      name: address_name,
      cep,
      city,
      district,
      number,
      state,
      latitude,
      longitude,
      option,
      client_id: client.getDataValue("id"),
    });
  }
  async getClientByCNPJ(cnpj: string) {
    const client = await Client.findOne({
      where: { cnpj },
      include: [{ model: Address }],
    });
    return client;
  }
  async getAllClient() {
    const client = await Client.findAll({
      include: [{ model: Address }],
    });
    return client;
  }
  async deleteClientByCNPJ(cnpj: string) {
    await Client.destroy({ where: { cnpj } });
  }
}
