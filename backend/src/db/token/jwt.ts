const jwt = require("jsonwebtoken");
require('dotenv/config');
const secret = process.env.JWT_SECRET;

export const tokenGenerate = (user: string) => {
  const jwtConfig = {
    expiresIn: "1d",
    algorithm: "HS256",
  };
  const token = jwt.sign({ data: { userId: user } }, secret, jwtConfig);
  return token;
};


export const tokenDecode = (userToken: string) => {
  const token = jwt.verify(userToken, secret);
  return token.data;
};