'use strict';

const Sequelize = require('sequelize');
const Op = require('sequelize').Op;
const config = require('config');
const models = {};

const sequelize = new Sequelize(config.get('db.database'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  port: config.get('db.port') || 3306,
  dialect: 'mariadb',
  logging: true,
  pool: {
    max: config.get('db.pool.max') || 10,
    min: config.get('db.pool.min') || 0,
    idle: config.get('db.pool.idle') || 3000,
  },
  charset: 'utf8mb4',
  dialectOptions: {
    collate: 'utf8mb4_general_ci',
    useUTC: false,
    timezone: config.get('db.timezone'),
    autoJsonMap: false,
  },
  timezone: config.get('db.timezone'),
  operatorsAliases: {
    $gt: Op.gt,
    $lt: Op.lt,
    $gte: Op.gte,
    $lte: Op.lte,
  },
});

models['User'] = require('./user.js')(sequelize);
models['Role'] = require('./role.js')(sequelize);

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
