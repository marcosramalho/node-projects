const dotenv = require('dotenv');
dotenv.config();

const { PASSWORD, USER, DIALECT } = process.env;

module.exports = {
  HOST: 'localhost',
  USER,
  PASSWORD,
  DB: '2-pern-authentication',
  DIALECT,
  pool: {
    MAX: 5,
    MIN: 0,
    ACQUIRE: 3000,
    IDLE: 10000,
  },
};
