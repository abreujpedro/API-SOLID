import { Sequelize } from "sequelize";

const dbName = "flights";
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "123";

const sequelize = new Sequelize( dbName, dbUser, dbPassword, {
    dialect: "mysql",
    port: 3306,
    host: dbHost,
} );

export default sequelize;