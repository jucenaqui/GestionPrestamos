const sql = require('mssql');
const config = require('../config');

var query = {};

/**
 * consulta a todos los campos de una tabla pasada segun la url principal
 * @param {*} req request de la petición
 * @param {*} res response de la petición
 * @param {*} tabla tabla de los registros
 */
query.getQueryGeneral = (req, res, tabla)=>{
  
    sql.connect(config.sql).then((pool) => {
        return  pool.request()
            .query(query)
    }).then(result => {
        sql.close();
        res.status(200).send({data:result.recordset});
    }).catch(err => {
        sql.close();
        res.status(500).send({message:"error: "+err});
    });
}

/**
 * petición con un id como parametro
 * @param {*} req request de la peticion
 * @param {*} res response de la peticion
 * @param {*} tabla la tabla a la que se va a consultar
 */
query.getQueryConParametro = (req, res, tabla) => {

    var param = Object.keys(req.params)[0];
    var query = "select top 1 from " + tabla + " where " + param + "=" + req.params[param]
    sql.connect(config.sql).then((pool) => {
        return pool.request()
            .query(query)
    }).then(result => {
        sql.close();
        res.status(200).send({ data: result.recordset });
    }).catch(err => {
        sql.close();
        res.status(500).send({ message: "error: " + err });
    });
}

query.getConnecion = ()=>{
    return sql.connect(config.sql);
}

module.exports = query;