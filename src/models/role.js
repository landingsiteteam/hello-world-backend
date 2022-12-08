import Sequelize from 'sequelize';

class Role extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: { type: DataTypes.STRING(255) },
      },
      { sequelize, modelName: 'Role' }
    );
  }
  static associate() {}
}
export default Role;
