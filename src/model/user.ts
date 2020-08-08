import { Sequelize, Model, DataTypes } from "sequelize";

export class User extends Model {}

export function createModels(sequelize: Sequelize) {
  console.log("==> Creating Models");
  User.init(
    {
      username: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  );
}
