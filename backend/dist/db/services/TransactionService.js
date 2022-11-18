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
exports.transaction = exports.getSumTransactions = exports.getSubTransactions = exports.getTransactions = void 0;
const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");
const Transactions = require("../models/Transactions");
const Accounts = require("../models/Accounts");
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);
function getTransactions(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const credited = yield Transactions.findAll({
                where: { credited_account_id: myUser.account_id },
            });
            const debited = yield Transactions.findAll({
                where: { debited_account_id: myUser.account_id },
            });
            return { credited, debited };
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getTransactions = getTransactions;
function getSubTransactions(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const debited = yield Transactions.findAll({
                where: { debited_account_id: myUser.account_id },
            });
            return debited;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getSubTransactions = getSubTransactions;
function getSumTransactions(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = body;
            const myUser = yield Users.findOne({ where: { username } });
            const credited = yield Transactions.findAll({
                where: { credited_account_id: myUser.account_id },
            });
            return credited;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.getSumTransactions = getSumTransactions;
function transaction(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield sequelize.transaction();
        try {
            const { sub, sum, value } = body;
            if (sub !== sum) {
                const subUser = yield Users.findOne({ where: { id: sub } });
                const sumUser = yield Users.findOne({ where: { id: sum } });
                const sumAccount = yield Accounts.findOne({
                    where: { id: sumUser.account_id },
                });
                const subAccount = yield Accounts.findOne({
                    where: { id: subUser.account_id },
                });
                if (subAccount.balance > value) {
                    const updatedSubBalance = subAccount.balance - value;
                    const updatedSumBalance = subAccount.balance + value;
                    yield subAccount.update({ balance: updatedSubBalance }, { transaction: t });
                    yield sumAccount.update({ balance: updatedSumBalance }, { transaction: t });
                    const createTransaction = yield Transactions.create({
                        credited_account_id: sumAccount.id,
                        debited_account_id: subAccount.id,
                        value,
                        created_at: Date.now(),
                    }, { transaction: t });
                    yield t.commit();
                    return createTransaction;
                }
                return 1;
            }
            return 2;
        }
        catch (e) {
            yield t.rollback();
            console.log(e);
            throw e;
        }
    });
}
exports.transaction = transaction;
/* export async function sumBalance(body: AccountLogin) {
  try {
  const { username, sumValue } = body;
  const myUser = await Users.findOne({ where: { username } });
  const myBalance = await Accounts.findOne({ where: { id: myUser.account_id }  });
  const updatedBalance = myBalance.balance + sumValue;
  const updatedUser = await Accounts.update({ balance: updatedBalance });
  return updatedUser
  }
  catch (e) {
    console.log(e);
    throw e;
  }
} */
