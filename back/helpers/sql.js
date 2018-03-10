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
            .query("select * from "+tabla)
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
debugger
    var param = Object.keys(req.params)[0];
    var query = "select top 1 * from " + tabla + " where " + param + "=" + req.params[param]
    sql.connect(config.sql).then((pool) => {
        return pool.request()
            .query(query)
    }).then(result => {
        debugger;
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

query.execute = (req, res, procedure) => {

    const params = req.body;
    sql.connect(config.sql).then( conn => {
     
        const request = new sql.Request();
        const params = req.body;

        for (let i in params) {
            if (typeof params[i] == 'object') {
                request.input(i, params[i][0]);
            } else {
                request.input(i, params[i]);
            }
        }

        request.execute(procedure, (err, result) => {
            sql.close();
            if(err){
                res.status(500).send({message:err});
            }
            res.status(200).send({ data: result});

        })
        
    })
   
}



module.exports = query;