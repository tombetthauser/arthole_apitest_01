'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      firstName: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      middleName: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      lastName: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      birthDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      statement: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      accountType: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      isAccountPrivate: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      passwordHash: {
        allowNull: true,
        type: Sequelize.STRING(250)
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
    return queryInterface.dropTable('Users');
  }
};