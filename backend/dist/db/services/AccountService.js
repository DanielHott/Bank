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
exports.getBalance = void 0;
const Users = require("../models/Users");
const Accounts = require("../models/Accounts");
function getBalance(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const myBalance = yield Accounts.findOne({ where: { id: myUser.account_id } });
            return myBalance;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getBalance = getBalance;
