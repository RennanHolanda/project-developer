'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'projects',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        tilte: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },

        zipe_code: {
          type: Sequelize.DataTypes.STRING(8),
          allowNull: false
        },
        cost: {
          type: Sequelize.DataTypes.REAL,
          allowNull: false
        },
        done: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
        },
        deadline: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
        },
        username: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
        user_id:{
          type: Sequelize.DataTypes.UUID,
          references: {
            model: { tableName: 'users' },
            key: 'id'
          },
          allowNull: false
        },
        
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};