var clienteModels = require('../models/cliente');

var modelCliente = {};

modelCliente.getClientes = (req , res, tabla)=>{
    return clienteModels.getClientes(req, res, tabla);
}

modelCliente.getClientesPorIdentificacion = (req, res, tabla) => {
    return clienteModels.getClientesPorIdentificacion(req, res, tabla);
}

modelCliente.crearCliente = (req, res, procedure) => {
    return clienteModels.crearCliente(req, res, procedure);
}

module.exports = modelCliente;