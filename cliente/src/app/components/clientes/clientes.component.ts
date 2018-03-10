import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as moment from 'moment';

// clientes
import { Cliente } from '../../models/cliente';

import { ClienteService } from '../clientes/cliente.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-cliente',
    templateUrl: './clientes.component.html',
    providers: [ClienteService]
})
export class ClienteComponent implements OnInit {
    public titulo: string;
    public cliente: Cliente;
    public messageSuccess: string;
    public messageError: string;

    constructor(private clienteService: ClienteService ) {}

    ngOnInit() {
        this.titulo = 'Clientes';
        this.messageError = undefined;
        this.messageSuccess = undefined;
        this.LimpiarCliente();
    }

    crearCliente(form: FormControl) {
        if (!form.valid) {
            this.messageError = 'Todos los Campos son obligatorios por favor verifique';
            return;
        }

        const fechaActual = moment(new Date);
        const fechaCliente = moment(this.cliente.fNacimiento);
        if (fechaActual.diff(fechaCliente, 'years') < 18) {
            this.messageError = 'El cliente no tiene la suficiente edad para solicitar un credito, Por favor verifique';
            this.messageSuccess = undefined;
            return;
        }

        this.clienteService.validarIdentificacion(this.cliente.identificacion).subscribe(

            result => {
                const laData = result.data;
                if ( laData.length > 0 ) {
                    this.messageError = 'El cliente con la Identificación ' + laData[0].Identificacion + ' ya existe, Por favor verifique';
                    this.messageSuccess = undefined;
                    // this.LimpiarCliente();
                    form.reset();
                } else {

                    this.clienteService.crearCliente(this.cliente).subscribe(
                        res => {
                            this.messageSuccess = 'Cliente guardado correctamente';
                            this.messageError = undefined;
                            // this.LimpiarCliente();
                            form.reset();
                        },
                        err => {
                            this.messageSuccess = undefined;
                            this.messageError = 'El Cliente no se pudo guardar intente nuevamente';
                            // this.LimpiarCliente();
                            form.reset();
                        }
                    );
                }

            },
            err => {
                console.log(err);
            }
        );

    }

    LimpiarCliente() {
        this.cliente = new Cliente(undefined, '', '', undefined);
    }
}








