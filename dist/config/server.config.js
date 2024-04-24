"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();
exports.ServerConfig = {
    port: env.get('PORT').required().asPortNumber(),
};
//# sourceMappingURL=server.config.js.map