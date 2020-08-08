import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";

import { Sequelize } from "sequelize";
import * as Redis from "ioredis";

import { getConnection } from "./postgres";
import { User, createModels } from "./model/user";

console.log("=== Initializing App ===");

const sequelize = getConnection();
createModels(sequelize);

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = {
    msg: "Hello There",
  };
  await next();
});

router.get("/create-user", async (ctx, next) => {
  const newUser = await User.create({
    username: "Lucas Terças",
  });
  ctx.body = {
    createUser: newUser,
  };
  await next();
});

// // Add middlewares
app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

// Start app
// app.on("ready", () => {
app.listen(3000, () => {
  console.log("==> Koa Started");
});
// })
