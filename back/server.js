var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

// routes
var routeClientes = require('./routes/cliente');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// configurar cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY,Origin,x-requested-with,Content-Type,Accept,Acces-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,UPDATE,DELETE,OPTIONS');
    res.header('Allow', 'GET,POST,PUT,UPDATE,DELETE,OPTIONS');
    next();
});

// usamos routes
app.use('/api', routeClientes);

app.listen(config.port,()=>{
    console.log("escuchando en http://localhost:" + config.port);
})