module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
      "Project",
      {
        id: {
          type:DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING(150),
          allowNull: false
        },

        zipe_code: {
          type: DataTypes.STRING(8),
          allowNull: false
        },
        cost: {
          type: DataTypes.REAL,
          allowNull: false
        },
        done: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        deadline: {
          type: DataTypes.DATE,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING(150),
          allowNull: false
        },
        user_id:{
          type: DataTypes.STRING(150),
          references: {
            model: { tableName: 'users' },
            key: 'id'
          },
          allowNull: false
        },
        
    },
    {
      tableName: "projects",
      timestamps: true
    }
  );

  return Project;
};