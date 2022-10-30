const Sequelize = require('sequelize');
const database = require('../config/db');

const Filme = database.define('filme', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        titulo:{
            type: Sequelize.STRING(200),
            allowNull: false,
        }, 
        descricao: {
            type: Sequelize.TEXT,
            allowNull: false
        }, 
        thumb: {
            type: Sequelize.STRING(50),
            allowNull: false
        }, 
        imagem: {
            type: Sequelize.STRING(50), 
            allowNull: false
        } 
    },
    { 
        freezeTableName: true 
    }
);

module.exports = Filme;
