var sql = require('../helpers/sql');

var cliente = {};

cliente.getClientes = (req, res, tabla)=>{
    return sql.getQueryGeneral(req, res, tabla);
}

module.exports = cliente;