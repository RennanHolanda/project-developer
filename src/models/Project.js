module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
      "Project",
      {
        id: {
          type:DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
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
          type: DataTypes.UUID,
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