'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _) {
    return queryInterface.bulkInsert('Adoptables', [{
      name: 'Luna',
      description: 'A very good companion and a great friend',
      gender: 'female',
      race: 'chitzu',
      age: 2,
      weight: 3.5,
      hasSpecialNeeds: false,
      status: 'available',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, _) {
    return queryInterface.bulkDelete('Adoptables', null, {});
  }
};
