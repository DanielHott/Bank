module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      debited_account_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'debited_account_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'Accounts',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        }},
      credited_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'credited_account_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'Accounts',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        }},
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        field: 'created_at',
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Transactions');
  },
};
