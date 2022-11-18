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
const TransactionService = require("../services/TransactionService");
function getTransactions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTransaction = yield TransactionService.getTransactions(req.body);
            if (userTransaction)
                return res.status(200).json(userTransaction);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function transaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTransaction = yield TransactionService.transaction(req.body);
            if (userTransaction && userTransaction !== 1 && userTransaction !== 2)
                return res.status(200).json(userTransaction);
            if (userTransaction === 1)
                return res.status(400).json({ message: "Saldo insuficiente." });
            if (userTransaction === 2)
                return res.status(400).json({ message: "Não pode transferir para si mesmo." });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function getSubTransactions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTransaction = yield TransactionService.getSubTransactions(req.body);
            if (userTransaction)
                return res.status(200).json(userTransaction);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
function getSumTransactions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTransaction = yield TransactionService.getSumTransactions(req.body);
            if (userTransaction)
                return res.status(200).json(userTransaction);
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
module.exports = {
    getTransactions,
    transaction,
    getSubTransactions,
    getSumTransactions
};
