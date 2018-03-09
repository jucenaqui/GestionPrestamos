var clienteModels = require('../models/cliente');

var modelCliente = {};

modelCliente.getClientes = (req , res)=>{
    return clienteModels.getClientes(req, res);
}

module.exports = modelCliente;