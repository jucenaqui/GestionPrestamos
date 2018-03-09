var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

// routes
var routeClientes = require('./routes/cliente');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// usamos routes
app.use('/api', routeClientes);

app.listen(config.port,()=>{
    console.log("escuchando en http://localhost:" + config.port);
})