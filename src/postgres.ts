import { Sequelize } from "sequelize";

export function getConnection(): Sequelize {
  console.log("==> Getting Pg Connection")
  const sequelize: Sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_DATABASE_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      dialect: "postgres",
      pool: {
        max: 5,
        min: 2,
      },
    }
  );
  return sequelize;
}
