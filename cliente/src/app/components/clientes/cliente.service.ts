import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Cliente } from '../../models/cliente';

@Injectable()
export class ClienteService {

    public url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:3000/api/';
    }

    crearCliente(cliente: Cliente) {

        const params = JSON.stringify(cliente);
        const headers = new Headers({ 'content-type': 'application/json' });

        return this.http.post(this.url + 'clientes', params, {headers: headers} )
        .map( res => res.json());
    }

    validarIdentificacion(identificacion: Number) {

        const headers = new Headers({ 'content-type': 'application/json' });

        return this.http.get(this.url + 'clientes/' + identificacion, { headers: headers })
            .map(res => res.json());
    }


}

