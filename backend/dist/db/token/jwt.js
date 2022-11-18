"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerate = void 0;
const jwt = require("jsonwebtoken");
require('dotenv/config');
const tokenGenerate = (user) => {
    const jwtConfig = {
        expiresIn: "1d",
        algorithm: "HS256",
    };
    const secret = process.env.JWT_SECRET || "voltaredonda";
    const token = jwt.sign({ data: { userId: user } }, secret, jwtConfig);
    return token;
};
exports.tokenGenerate = tokenGenerate;
