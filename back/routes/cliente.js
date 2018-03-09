var express = require('express');
var clienteController = require('../controllers/cliente');

var route = express.Router();

route.get('/clientes',( req, res )=>{
    clienteController.getClientes(req, res);
});


module.exports = route;