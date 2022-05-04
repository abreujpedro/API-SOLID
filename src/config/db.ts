import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize( dbName, dbUser, dbPassword, {
    //passar os dados para o sequelize
    dialect: "mysql",
    host: dbHost, //o host, neste caso estamos com um banco local
} );

export default sequelize; //exportar