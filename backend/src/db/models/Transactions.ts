const { Model, DataTypes, ModelStatic } = require("sequelize");


class Transactions extends Model {
  static init(sequelize: any) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        credited_account_id : { type: DataTypes.INTEGER, foreignKey: true },
        debited_account_id : { type: DataTypes.INTEGER, foreignKey: true },
        value: { type: DataTypes.INTEGER},
        created_at: { type: DataTypes.DATE }
      },
      {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: "Transactions",
        underscored: true,
        sequelize
      }
    );
  }
  static associate(models: any) {
    this.belongsTo(models.Accounts, { foreignKey: 'credited_account_id', as: 'account_credited' }, { foreignKey: 'debited_account_id', as: 'account_debited' })
    }
}

export {};

module.exports = Transactions;