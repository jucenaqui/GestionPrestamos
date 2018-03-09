var sql = require('../helpers/sql');

var cliente = {};

cliente.getClientes = (req, res)=>{
   return sql.getClientes(req, res);
}

module.exports = cliente;