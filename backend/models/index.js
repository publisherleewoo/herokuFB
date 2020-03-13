'use strict';


const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.Sub1 = require('./Sub1')(Sequelize, sequelize);
db.Sub2 = require('./Sub2')(Sequelize, sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
