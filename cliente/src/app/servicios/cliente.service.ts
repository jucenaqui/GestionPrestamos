import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService {

    public url: string;
    constructor(private http: HttpClient) {
        this.url = 'http://localhost:3000/api/';
    }

    crearCliente(cliente: Cliente): Observable<any> {

        const params = JSON.stringify(cliente);
        const headers = new HttpHeaders({ 'content-type': 'application/json' });

        return this.http.post(this.url + 'clientes', params, {headers: headers} );
    }

    validarIdentificacion(identificacion: Number): Observable<any> {

        const headers = new HttpHeaders({ 'content-type': 'application/json' });

        return this.http.get(this.url + 'clientes/' + identificacion, { headers: headers });
    }


}

