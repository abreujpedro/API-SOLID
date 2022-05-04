import { Sequelize } from "sequelize";

const dbName = "Flights";
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "123";

const sequelize = new Sequelize( dbName, dbUser, dbPassword, {
    dialect: "mysql",
    port: 5000,
    host: dbHost, 
} );

export default sequelize; //exportar