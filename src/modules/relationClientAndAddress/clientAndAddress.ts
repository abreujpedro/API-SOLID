import Address from "../address/model/addressModel";
import Client from "../clients/model/clientModel";
const handleDb = () => {
  Client.hasMany(Address, { foreignKey: "client_id", onDelete: "CASCADE" });
  Address.belongsTo(Client, {
    foreignKey: "client_id",
    onDelete: "CASCADE",
  });
};

export default handleDb;
