'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artworks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'Users' }, key: 'id' },
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(2000)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      height: {
        type: Sequelize.FLOAT
      },
      width: {
        type: Sequelize.FLOAT
      },
      depth: {
        type: Sequelize.FLOAT
      },
      measurementUnit: {
        type: Sequelize.STRING(50)
      },
      seconds: {
        type: Sequelize.INTEGER
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Artworks');
  }
};