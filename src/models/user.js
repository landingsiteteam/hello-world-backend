'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models['Role']);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING(128),
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
