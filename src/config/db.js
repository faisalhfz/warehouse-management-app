require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const stockSchema = require('../models/stock');
const Stock = sequelize.define('Stock', stockSchema);

const sync = async () => {
  await sequelize.sync();
};
sync();

module.exports = { sequelize, Stock };
