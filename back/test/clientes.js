'use strict'

let request = require('supertest-as-promised');
const api = require('../server');
const host = api;

request = request('http://localhost:3000/api');

describe('ruta /clientes, ',function() {
    describe('GET',function () {
        it('deberia regresar array clientes', function (done) {
            request
            .get('/clientes')
            .set('Accept','application/json')
            .expect(200)
            .expect('content-type',/application\/json/)
            .end((err,res)=>{
                let body = res.body;

                // request.expect(body).to.have.property(data)
                // request.expect(body.data).to.be.an(array)
                done(err)
            })
        });
    });

});