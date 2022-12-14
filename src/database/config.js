require('dotenv').config();

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}