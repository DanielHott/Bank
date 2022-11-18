const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");
const Transactions = require("../models/Transactions");
const Accounts = require("../models/Accounts");

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

interface login {
  username: string;
  password: string;
}

interface AccountLogin {
  username: string;
  sub: string;
  sum: string;
  value: number;
}

export async function getTransactions(body: login) {
  try {
    const { username } = body;
    const myUser = await Users.findOne({ where: { username } });
    const credited = await Transactions.findAll({
      where: { credited_account_id: myUser.account_id },
    });
    const debited = await Transactions.findAll({
      where: { debited_account_id: myUser.account_id },
    });
    const users = await Users.findAll({attributes: {exclude: ['password']}});
    return { credited, debited, users };
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getSubTransactions(body: login) {
  try {
    const { username } = body;
    const myUser = await Users.findOne({ where: { username } });
    const debited = await Transactions.findAll({
      where: { debited_account_id: myUser.account_id },
    });
    return debited;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getSumTransactions(body: login) {
  try {
    const { username } = body;
    const myUser = await Users.findOne({ where: { username } });
    const credited = await Transactions.findAll({
      where: { credited_account_id: myUser.account_id },
    });
    return credited;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function transaction(body: AccountLogin) {
    const t = await sequelize.transaction();
  try {
    const { sub, sum, value } = body;
    if(sub !== sum) {
    const subUser = await Users.findOne({ where: { username: sub } });
    const sumUser = await Users.findOne({ where: { username: sum } });
    console.log(sumUser.dataValues)
    const sumAccount = await Accounts.findOne({
      where: { id: Number(sumUser.dataValues.account_id) },
    });
    const subAccount = await Accounts.findOne({
      where: { id: Number(subUser.dataValues.account_id) },
    });
    if (subAccount.balance > value) {
      const updatedSubBalance = subAccount.balance - value;
      const updatedSumBalance = sumAccount.balance + value;
      await subAccount.update({ balance: updatedSubBalance },
        { transaction: t });
      await sumAccount.update({ balance: updatedSumBalance },
        { transaction: t });
      const createTransaction = await Transactions.create({
        credited_account_id: sumAccount.id,
        debited_account_id: subAccount.id,
        value,
        created_at: Date.now(),
      },
      { transaction: t });
      await t.commit();
      return createTransaction;
    }
      return 1;
  }
    return 2;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
}

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
