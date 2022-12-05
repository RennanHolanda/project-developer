'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },

        username: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
       
        password:{
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};