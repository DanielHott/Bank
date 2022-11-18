import { Sequelize } from 'sequelize';
import * as config from '../config/database';
const Users = require('./Users')
const Accounts = require('./Accounts')
const Transactions = require('./Transactions');

const connection = new Sequelize(config);

Accounts.init(connection);
Transactions.init(connection);
Users.init(connection);
Transactions.associate(connection.models);
Users.associate(connection.models);

module.exports = connection;