const { Model, DataTypes } = require("sequelize");
const NewModel = Model;
const NewDatatypes = DataTypes;

class Accounts extends NewModel {
  static init(sequelize: any) {
    super.init(
      {
        id: { type: NewDatatypes.INTEGER, primaryKey: true, autoIncrement: true },
        balance: NewDatatypes.INTEGER,
      },
      {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: "Accounts",
        underscored: true,
        sequelize
      }
    );
  }

}

export {};

module.exports = Accounts;


