"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const json = require("koa-json");
const postgres_1 = require("./postgres");
const user_1 = require("./model/user");
console.log("=== Initializing App ===");
const sequelize = postgres_1.getConnection();
user_1.createModels(sequelize);
const app = new Koa();
const router = new Router();
router.get("/", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = {
        msg: "Hello There",
    };
    yield next();
}));
router.get("/create-user", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_1.User.create({
        username: "Lucas Terças",
    });
    ctx.body = {
        createUser: newUser,
    };
    yield next();
}));
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
//# sourceMappingURL=app.js.map