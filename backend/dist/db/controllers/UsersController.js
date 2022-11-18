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
const UsersService = require("../services/UsersService");
const jwt_1 = require("../token/jwt");
function getLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const login = yield UsersService.getLogin(req.body);
            if (!login)
                return res.status(400).json({ message: 'Username ou password inválidos!' });
            if (login) {
                const token = (0, jwt_1.tokenGenerate)(req.body.username);
                return res.status(200).json({ token });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UsersService.createUser(req.body);
            if (user)
                return res.status(200).json(user);
            return res.status(400).json({ message: "O usuário já existe!" });
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    });
}
;
module.exports = {
    getLogin,
    createUser
};
