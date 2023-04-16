"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("./frameworks/webserver/server");
const router_1 = require("./frameworks/webserver/route/router");
const app = (0, express_1.default)();
(0, server_1.configServer)(app);
(0, server_1.startServer)(app, 5200);
(0, router_1.route)(app);
