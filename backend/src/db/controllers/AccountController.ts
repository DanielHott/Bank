const AccountService = require("../services/AccountService");

import { Request, Response } from "express";

async function getBalance(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.getBalance(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function subtractBalance(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.subtractBalance(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function sumBalance(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.sumBalance(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

module.exports = {
    getBalance,
    subtractBalance,
    sumBalance
  };