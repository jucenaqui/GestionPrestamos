var clienteModels = require('../models/cliente');

var modelCliente = {};

modelCliente.getClientes = (req , res, tabla)=>{
    return clienteModels.getClientes(req, res, tabla);
}

module.exports = modelCliente;