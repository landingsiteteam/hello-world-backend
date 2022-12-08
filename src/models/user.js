import Sequelize from 'sequelize';
import Role from './role';

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: { type: DataTypes.STRING(12), primaryKey: true },
        position: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
      },
      { sequelize, modelName: 'User' }
    );
  }
  static associate() {
    this.hasMany(Role);
  }
}
export default User;
