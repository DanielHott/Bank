"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require("sequelize");
const NewModel = Model;
const NewDatatypes = DataTypes;
class Accounts extends NewModel {
    static init(sequelize) {
        super.init({
            id: { type: NewDatatypes.INTEGER, primaryKey: true, autoIncrement: true },
            balance: NewDatatypes.INTEGER,
        }, {
            timestamps: false,
            tableName: "Accounts",
            underscored: true,
            sequelize
        });
    }
}
module.exports = Accounts;
