'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Smartphones', 
        'ProductId', 
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Smartphones', 
        'ProductId', 
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ),
    ]);
  },
};
