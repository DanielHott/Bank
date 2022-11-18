module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Accounts',
      [
        {
          id: 1,
          balance: 400
        },
        {
          id: 2,
          balance: 200
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  },
};
