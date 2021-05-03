'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [{
      name: "Tablet 1",
      price: 15.32,
      ammount: 130,
      brand: "Apple",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Smartphone 1",
      price: 150.32,
      ammount: 140,
      brand: "Android",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TV 1",
      price: 1500.32,
      ammount: 13,
      brand: "Panasonic",
      createdAt: new Date(),
      updatedAt: new Date()
    },
]);
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
    await queryInterface.bulkDelete("Products", null, {});
  }
};
