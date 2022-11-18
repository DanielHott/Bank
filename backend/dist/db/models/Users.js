"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes, InferAttributes, ModelStatic } = require("sequelize");
class Users extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            account_id: { type: DataTypes.INTEGER, allowNull: true },
        }, {
            timestamps: false,
            tableName: "Users",
            underscored: true,
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Accounts, { foreignKey: 'account_id', as: 'account' });
    }
}
module.exports = Users;
