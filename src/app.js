const express = require('express');
const routers = require('./router');
const database = require('./config/db');
const cors = require('cors');
const app = express();

//
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //app.use(cors());
    next();
});

//middleware que faz o parse da requisicao/body para em json
app.use(express.json());


//config and connect database
database.sync().then( () => {
    console.log("MySQL conectado!!!!");
});


//apartir de agora toda requisicao iniciada com /* quem responderá será o arquivo router
app.use('/', routers);




module.exports = app;