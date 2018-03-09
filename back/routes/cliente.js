var express = require('express');
var clienteController = require('../controllers/cliente');

var route = express.Router();

var tabla = 'clientes';

route.get('/clientes',( req, res )=>{
    clienteController.getClientes(req, res, tabla);
});


module.exports = route;