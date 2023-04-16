"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.configServer = void 0;
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const configServer = (app) => {
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, helmet_1.default)({ xssFilter: true }));
};
exports.configServer = configServer;
const startServer = (app, PORT) => {
    app.listen(PORT, () => {
        console.log("Product server started on", PORT);
    });
};
exports.startServer = startServer;
