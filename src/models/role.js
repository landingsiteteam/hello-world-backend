const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Role extends Model {
    static associate(models) {}
  }
  Role.init(
    {
      name: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 0 },
    },
    { sequelize }
  );
  return Role;
};
