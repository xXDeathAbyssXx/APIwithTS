"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const indexRouters_1 = __importDefault(require("./routers/indexRouters"));
const UsersRoutes_1 = __importDefault(require("./routers/UsersRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
class Server {
  constructor() {
    this.app = (0, express_1.default)();
    this.config();
    this.routers();
  }
  config() {
    //MongoDB
    const user = process.env.USERDB;
    const pass = process.env.PASSWORDDB;
    mongoose_1.default.connect(
      `mongodb+srv://` +
        user +
        `:` +
        pass +
        `@cluster0.pmfuk.mongodb.net/Data?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => {
        console.log("\n");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Loading Mondodb....");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
        console.log("[INFO]: Ready MongoDB ✅");
        console.log(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        );
      }
    );
    //Backend Settings
    this.app.set("port", process.env.PORT || 3000);
    this.app.use((0, morgan_1.default)("dev"));
    this.app.use(express_1.default.json());
    this.app.use((0, helmet_1.default)());
    this.app.use(express_1.default.urlencoded({ extended: true }));
    this.app.use((0, compression_1.default)());
    this.app.use((0, cors_1.default)());
  }
  routers() {
    this.app.use(indexRouters_1.default);
    this.app.use("/api/register", UsersRoutes_1.default);
  }
  start() {
    this.app.listen(this.app.get("port"), () =>
      console.log("Server On Port: " + this.app.get("port"))
    );
  }
}
const server = new Server();
server.start();
