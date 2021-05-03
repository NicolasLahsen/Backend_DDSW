'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    ALTER SEQUENCE "Tablets_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "Smartphones_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "Products_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "TVs_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "Products_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "ProductQualifications_id_seq" RESTART WITH 1;
    ALTER SEQUENCE "Transactions_id_seq" RESTART WITH 1;
    `)
  }
};
