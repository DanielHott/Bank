// src/seeders/[timestamp]-employees.js
// src/seeders/[timestamp]-employees.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          username: 'Daniel',
          password: '1234',
          account_id: 1,
        },
        {
          id: 2,
          username: 'Michael',
          password: '1234',
          account_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

