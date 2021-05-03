'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductQualifications', [{
      ProductId: 1,
      qualification: 3.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ProductId: 2,
      qualification: 4.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ProductId: 3,
      qualification: 1.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ProductQualifications', null, {});
  }
};
