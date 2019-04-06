'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tournaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      miesto: {
        type: Sequelize.STRING
      },
      maxC: {
        type: Sequelize.INTEGER
      },
      minC: {
        type: Sequelize.INTEGER
      },
      parovanie: {
        type: Sequelize.STRING
      },
      sukromny: {
        type: Sequelize.BOOLEAN
      },
      date1: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tournaments');
  }
};