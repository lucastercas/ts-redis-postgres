"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function createModels(sequelize) {
    console.log("==> Creating Models");
    User.init({
        username: sequelize_1.DataTypes.STRING,
    }, { sequelize, modelName: "user" });
}
exports.createModels = createModels;
//# sourceMappingURL=user.js.map