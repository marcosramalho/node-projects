const dbConfig = require('../../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.MAX,
    min: dbConfig.pool.MIN,
    acquire: dbConfig.pool.ACQUIRE,
    idle: dbConfig.pool.IDLE,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);

module.exports = db;
