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
const AccountService = require("../services/AccountService");
function getBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userAccount = yield AccountService.getBalance(req.body);
            if (userAccount)
                return res.status(200).json(userAccount);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function subtractBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userAccount = yield AccountService.subtractBalance(req.body);
            if (userAccount)
                return res.status(200).json(userAccount);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function sumBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userAccount = yield AccountService.sumBalance(req.body);
            if (userAccount)
                return res.status(200).json(userAccount);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
module.exports = {
    getBalance,
    subtractBalance,
    sumBalance
};
