const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models['Role']);
    }
  }
  User.init(
    {
      name: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 0 },
      status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
    },
    { sequelize }
  );
  return User;
};
