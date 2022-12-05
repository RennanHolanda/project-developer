module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true
    }
  );

  return User;
};
