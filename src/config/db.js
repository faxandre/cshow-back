const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'cshow',//database
    'root',//user
    '',//pass
    {
        dialect: 'mysql',//dialeto
        host: 'localhost',//host
        port: 3306 //porta
    }
);
//passar as variaveis para as variaveis de ambiente

module.exports = sequelize;
