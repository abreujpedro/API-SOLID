import { DataTypes } from "sequelize";
import db from "../../../config/db";

const Client = db.define("client", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a CNPJ" },
      len: {
        args: [14, 14],
        msg: "CNPJ need to has 14 chars",
      },
    },
  },
  corporate_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "You need to pass a Coporate Name" },
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a Name" },
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a Phone number" },
    },
  },
});

export default Client;
