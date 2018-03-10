'use strict'

let request = require('supertest-as-promised');
const api = require('../server');
const host = api;

request = request(host);

describe('ruta /clientes, ',function() {
    describe('GET',function () {
        it('deberia regresar array clientes', function (done) {
            request
            .get('/api/clientes')
            .set('Accept','application/json')
            .expect(200)
            .expect('content-type',/application\/json/)
            .end((err,res)=>{
                let body = res.body;

                //expect(body).to.have.property(data)
                expect(body.data).to.be.an(array);
                done(err);
            })
        });
    });

});