const express = require('express');
const routers = require('./router');
const database = require('./config/db');

const app = express();

//middleware que faz o parse da requisicao/body para em json
app.use(express.json());


//config and connect database
database.sync().then( () => {
    console.log("MySQL conectado!!!!");
});


//apartir de agora toda requisicao iniciada com /* quem responderá será o arquivo router
app.use('/', routers);




module.exports = app;