require('dotenv').config();

module.exports = {
  "development": {
    "operatorsAliases": false,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "port": process.env.DB_PORT
  },
  "test": {
    "operatorsAliases": false,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "port": process.env.DB_PORT
  },
  "production": {
    "operatorsAliases": false,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "port": process.env.DB_PORT
  }
};