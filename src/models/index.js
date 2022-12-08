import config from 'config';
import { default as DataTypes, default as Sequelize } from 'sequelize';
// import logger from '../logger/index.js';
import Role from './role.js';
import User from './user.js';

const models = [User, Role];

const host = config.get('db.host') || 'localhost';
const port = config.get('db.port') || 3306;
const database = config.get('db.database') || 'rsg';
const username = config.get('db.username') || 'root';
const password = config.get('db.password') || '';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'mariadb',
  dialectOptions: {
    collate: 'utf8mb4_general_ci',
    useUTC: false,
    autoJsonMap: false,
  },
  logging: true,
  pool: { max: 5, idle: 1000 },
  timezone: '+08:00',
});

for (let model of models) {
  model.init(sequelize, DataTypes);
}
for (let model of models) {
  console.info('=>', model.name);
  model.associate();
}

export { sequelize, Sequelize, User, Role };
