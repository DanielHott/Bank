const TransactionService = require("../services/TransactionService");

import { Request, Response } from "express";

async function getTransactions(req: Request, res: Response) {
    try {
    const userTransaction =  await TransactionService.getTransactions(req.body);
    if(userTransaction) return res.status(200).json(userTransaction);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function transaction(req: Request, res: Response) {
  try {
  const userTransaction =  await TransactionService.transaction(req.body);
  if(userTransaction && userTransaction !== 1 && userTransaction !== 2) return res.status(200).json(userTransaction);
  if(userTransaction === 1) return res.status(400).json({ message: "Saldo insuficiente."})
  if(userTransaction === 2) return res.status(400).json({ message: "Não pode transferir para si mesmo."})
} catch (err) {
  console.log(err);
  return res.status(500).json({ message: err });
}
}

async function getSubTransactions(req: Request, res: Response) {
  try {
  const userTransaction =  await TransactionService.getSubTransactions(req.body);
  if(userTransaction) return res.status(200).json(userTransaction);
} catch (err) {
  console.log(err);
  return res.status(500).json({ message: err });
}
}

async function getSumTransactions(req: Request, res: Response) {
  try {
  const userTransaction =  await TransactionService.getSumTransactions(req.body);
  if(userTransaction) return res.status(200).json(userTransaction);
} catch (err) {
  console.log(err);
  return res.status(500).json({ message: err });
}
}


module.exports = {
    getTransactions,
    transaction,
    getSubTransactions,
    getSumTransactions
  };