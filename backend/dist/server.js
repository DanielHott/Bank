"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = __importDefault(require("./"));
const app = (0, express_1.default)();
app.use(_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is listening port http://localhost:${PORT}/`);
});
