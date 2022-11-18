import { Request, Response } from "express";
import * as express from 'express'

export async function testLoginCreate(req: Request, res: Response, next: express.NextFunction) {
    try {
    const hasUpper = (str: string) => /[A-Z]/.test(str);
    const hasNumber = (str: string) => /[0-9]/.test(str);
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'Deve informar username e password.' });
    if (username.length < 3) return res.status(400).json({ message: 'Username deve possuir 3 ou mais caracteres.' });
    if (password.length < 8) return res.status(400).json({ message: 'Password deve possuir 8 ou mais caracteres.' });
    if (!hasUpper(password) || !hasNumber(password)) return res.status(400).json({ message: 'Password deve possuir uma letra maiúscula e um número.' });
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}