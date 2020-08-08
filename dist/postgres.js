"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const sequelize_1 = require("sequelize");
function getConnection() {
    console.log("==> Getting Pg Connection");
    const sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_DATABASE_USER, process.env.POSTGRES_PASSWORD, {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        dialect: "postgres",
        pool: {
            max: 5,
            min: 2,
        },
    });
    return sequelize;
}
exports.getConnection = getConnection;
//# sourceMappingURL=postgres.js.map