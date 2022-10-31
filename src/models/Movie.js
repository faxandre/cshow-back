const Sequelize = require('sequelize');
const database = require('../config/db');

const Movie = database.define('movie', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: Sequelize.STRING(200),
            allowNull: false,
        }, 
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        }, 
        img: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    },
    { 
        freezeTableName: true 
    }
);

module.exports = Movie;
