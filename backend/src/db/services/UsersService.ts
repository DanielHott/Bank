import { tokenDecode } from "../token/jwt";

const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");
const Accounts = require("../models/Accounts");
const bcrypt = require("bcrypt");

interface login {
  username: string;
  password: string;
}

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

export async function getLogin(body: login) {
  try {
  const { username, password } = body;
  const myUser = await Users.findOne({ where: { username } });
  if(myUser) {
  const hashPass = await bcrypt.compare(password, myUser.password);
  if (hashPass) return myUser;
  if (!hashPass) return null;
  }
  return null
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}

export async function checkJWT(token: string) {
  try {
    const decoded = tokenDecode(token);
    return(decoded)
/*     const myUser = await Users.findOne({ where: { username } });
    if(myUser) return myUser;
    return null; */
  }   catch (e) {
    console.log(e);
    throw e;
  }
}

export async function createUser(body: login) {
  const t = await sequelize.transaction();
  try {
    const { username, password } = body;
    const hashPass = await bcrypt.hash(password, 0);
    const user = await Users.findOne({ where: { username } });
    if (!user) {
      const newAccount = await Accounts.create(
        { balance: 100 },
        { transaction: t }
      );
      const create = await Users.create(
        { username, password: hashPass, account_id: newAccount.dataValues.id },
        { transaction: t }
      );
      await t.commit();
      return create;
    }
    await t.rollback();
    return null;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
}
