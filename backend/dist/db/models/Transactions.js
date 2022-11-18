"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes, ModelStatic } = require("sequelize");
class Transactions extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            credited_account_id: { type: DataTypes.INTEGER, foreignKey: true },
            debited_account_id: { type: DataTypes.INTEGER, foreignKey: true },
            value: { type: DataTypes.INTEGER },
            created_at: { type: DataTypes.DATE }
        }, {
            timestamps: false,
            tableName: "Transactions",
            underscored: true,
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Accounts, { foreignKey: 'credited_account_id', as: 'account_credited' }, { foreignKey: 'debited_account_id', as: 'account_debited' });
    }
}
module.exports = Transactions;
