var sql = require('../helpers/sql');

var cliente = {};

cliente.getClientes = (req, res, tabla)=>{
    return sql.getQueryGeneral(req, res, tabla);
}

cliente.getClientesPorIdentificacion = (req, res, tabla) => {
    return sql.getQueryConParametro(req, res, tabla);
}

cliente.crearCliente = (req, res, procedure) => {
    return sql.execute(req, res, procedure);
}

module.exports = cliente;