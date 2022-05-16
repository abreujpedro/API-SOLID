import Address from "../address/model/addressModel";
import Client from "../clients/model/clientModel";
const handleDb = () =>
{
  Client.hasMany( Address, { foreignKey: "client_id", onDelete: 'cascade', hooks:true  });
  Address.belongsTo( Client, {
    foreignKey: "client_id",
  } );
};

export default handleDb;
