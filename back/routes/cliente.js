var express = require('express');
var clienteController = require('../controllers/cliente');

var route = express.Router();

var tabla = 'clientes';

/**
 * ruta para todos los campos de clientes
 */
route.get('/clientes',( req, res )=>{
    clienteController.getClientes(req, res, tabla);
});


/**
 * ruta para todos los campos de un cliente segun la identificacion
 */
route.get('/clientes/:identificacion', (req, res) => {
    debugger
    clienteController.getClientesPorIdentificacion(req, res, tabla);
});

route.post('/clientes', (req, res) => {
    clienteController.crearCliente(req, res, 'insertarCliente');
});


module.exports = route;