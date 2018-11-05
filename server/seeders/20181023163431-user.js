'use strict';
const uuid = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: uuid(),
      uniqueId: '716c704a-c82e-4f51-b0f7-0d6196f33f33',
      name: 'GFA_UnDead',
      dollars: 100,
      amount: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: uuid(),
      uniqueId: '170eca6c-3d44-48bb-ab5b-b78320b1b27a',
      name: 'JLess',
      dollars: 200,
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuid(),
      uniqueId: 'a036f46a-34d1-37d4-86d6-444ee3fa4c95',
      name: 'TheSteveGaming',
      dollars: 300,
      amount: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
