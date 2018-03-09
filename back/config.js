'use strict'

var config = {
    sql:{
        "user": process.env.DB_USER || 'sa',
        "password": process.env.DB_PASSWORD || 'julio123.',
        "server": process.env.DB_SERVER || 'DESKTOP-KPPJ8DD\\SQL2014',
        "database":"GestionPrestamos",
        "options": {
            "encrypt": true
        }
    },
    port:"3000"
}

module.exports = config;
