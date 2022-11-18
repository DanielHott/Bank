const UsersService = require("../services/UsersService");
import { tokenGenerate } from "../token/jwt";

import { Request, Response } from "express";

async function getLogin(req: Request, res: Response) {
    try {
    const login = await UsersService.getLogin(req.body);
    if (!login) return res.status(400).json({ message: 'Username ou password inválidos!' });
    if (login) {
      const token = tokenGenerate(req.body.username) 
      return res.status(200).json({ token });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function checkDecoded(req: Request, res: Response) {
  try {
    const checking = await UsersService.checkJWT(req.body.token);
    return res.status(200).json({ checking });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const user = await UsersService.createUser(req.body);
    if(user) return res.status(200).json(user);
    return res.status(400).json({ message: "O usuário já existe!"});
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

module.exports = {
    getLogin,
    createUser,
    checkDecoded,
  };