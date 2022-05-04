"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = "flights";
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "123";
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    port: 3306,
    host: dbHost,
});
exports.default = sequelize;
