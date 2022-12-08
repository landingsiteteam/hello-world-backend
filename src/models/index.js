const Sequelize = require('sequelize');
// const Op = require('sequelize').Op;
const config = require('config');

const host = config.get('db.host') || 'localhost';
const port = config.get('db.port') || 3306;
const database = config.get('db.database') || 'rsg';
const username = config.get('db.username') || 'root';
const password = config.get('db.password') || '';
const timezone = config.get('db.timezone') || '+08:00';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'mariadb',
  dialectOptions: {
    collate: 'utf8mb4_general_ci',
    useUTC: false,
    autoJsonMap: false,
  },
  pool: { min: 0, max: 5, idle: 1000 },
  timezone,
});

const User = require('./user.js')(sequelize);
const Role = require('./role.js')(sequelize);

const models = { User, Role };

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, Sequelize, User, Role };
