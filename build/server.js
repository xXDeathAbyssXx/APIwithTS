"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const indexRouters_1 = __importDefault(require("./routers/indexRouters"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routers();
    }
    config() {
        //MongoDB
        //Backend Settings
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, helmet_1.default)());
    }
    routers() {
        this.app.use(indexRouters_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('Server On Port: ' + this.app.get('port')));
    }
}
const server = new Server();
server.start();
