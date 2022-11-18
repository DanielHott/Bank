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
exports.createUser = exports.getLogin = void 0;
const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");
const Accounts = require("../models/Accounts");
const bcrypt = require("bcrypt");
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);
function getLogin(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const hashPass = yield bcrypt.compare(password, myUser.password);
            if (hashPass)
                return myUser;
            if (!hashPass)
                return null;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getLogin = getLogin;
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield sequelize.transaction();
        try {
            const { username, password } = body;
            const hashPass = yield bcrypt.hash(password, 0);
            const user = yield Users.findOne({ where: { username } });
            if (!user) {
                const newAccount = yield Accounts.create({ balance: 100 }, { transaction: t });
                const create = yield Users.create({ username, password: hashPass, account_id: newAccount.dataValues.id }, { transaction: t });
                yield t.commit();
                return create;
            }
            yield t.rollback();
            return null;
        }
        catch (e) {
            yield t.rollback();
            console.log(e);
            throw e;
        }
    });
}
exports.createUser = createUser;
