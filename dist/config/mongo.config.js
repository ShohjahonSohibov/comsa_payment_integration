"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfig = void 0;
const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();
exports.MongoConfig = {
    connectionString: env.get('CONNECTION_STRING').required().asString(),
};
//# sourceMappingURL=mongo.config.js.map