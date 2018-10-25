'use strict';
const bcrypt = require('bcrypt');
const uuid = require('uuid/v1');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: uuid(),
      username: 'kautsar',
      password: bcrypt.hashSync('kautsar', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
