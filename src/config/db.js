const Sequelize = require('sequelize');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

/**
 * MySQL HEROKU
 * STRING CONNECTION: mysql://b74010a43b9c1d:afc5aa99@us-cdbr-east-06.cleardb.net/heroku_f6661ce4fa3fa9b?reconnect=true
 * STRING CONNECTION: [database type]://[username]:[password]@[host]:[port]/[database name]
 * HOST: us-cdbr-east-06.cleardb.net
 * USER: b74010a43b9c1d
 * PASS: afc5aa99
 * DATABASE: heroku_f6661ce4fa3fa9b
 * */
/*const sequelize = new Sequelize(
    process.env.DB_SCHEMA,//database
    process.env.DB_USER,//user
    process.env.DB_PASS,//pass
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        //port: process.env.DB_PORT
    }
);*/
const sequelize = new Sequelize(
    'heroku_f6661ce4fa3fa9b',//database
    'b74010a43b9c1d',//user
    'afc5aa99',//pass
    {
        dialect: 'mysql',//dialeto
        host: 'us-cdbr-east-06.cleardb.net',
        port: 3306
    }
);
//LOCAL MYSQL
/*const sequelize = new Sequelize(
    'cshow',//database
    'root',//user
    '',//pass
    {
        dialect: 'mysql',//dialeto
        host: 'localhost',//host mongo()
        port: 3306 //porta 
    }
);*/



module.exports = sequelize;
