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
exports.testLoginCreate = void 0;
function testLoginCreate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hasUpper = (str) => /[A-Z]/.test(str);
            const hasNumber = (str) => /[0-9]/.test(str);
            const { username, password } = req.body;
            if (!username || !password)
                return res.status(400).json({ message: 'Deve informar username e password.' });
            if (username.length < 3)
                return res.status(400).json({ message: 'Username deve possuir 3 ou mais caracteres.' });
            if (password.length < 8)
                return res.status(400).json({ message: 'Password deve possuir 8 ou mais caracteres.' });
            if (!hasUpper(password) || !hasNumber(password))
                return res.status(400).json({ message: 'Password deve possuir uma letra maiúscula e um número.' });
            next();
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    });
}
exports.testLoginCreate = testLoginCreate;
