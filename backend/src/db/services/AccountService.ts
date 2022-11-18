const Users = require("../models/Users");
const Accounts = require("../models/Accounts");


interface login {
  username: string;
  password: string;
}

interface AccountLogin {
    username: string;
    balance: number;
    subtractValue: number;
    sumValue: number;
  }

export async function getBalance(body: login) {
  try {
  const { username } = body;
  const myUser = await Users.findOne({ where: { username } });
  const myBalance = await Accounts.findOne({ where: { id: myUser.account_id }  })
  return myBalance;
  }
  catch (e) {
    console.log(e);
    throw e; 
  }
}



