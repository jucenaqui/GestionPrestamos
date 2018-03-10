import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

// clientes
import { Solicitud } from '../../models/solicitud';


@Component({
    selector: 'app-solicitud',
    templateUrl: './solicitud.component.html',
    providers: []
})
export class SolicitudComponent implements OnInit {

    public titulo: String = 'Solicitud Crédito';
    public solicitud: Solicitud;
    public messageSuccess: string;
    public messageError: string;

    constructor() {}

    ngOnInit() {
        this.messageError = undefined;
        this.messageSuccess = undefined;
        this.limpiarSolicitud();
    }


    ValidarSolicitud(form: FormControl) {

        const fechaActual = moment(new Date);
        const fechaSolicitud = moment(this.solicitud.fIngreso);

        if (!form.valid) {
            this.limpiarMessages();
            this.messageError = 'Todos los Campos son obligatorios por favor verifique';
            this.messageSuccess = undefined;
            return;
        } else
        if ( this.solicitud.salario > 100000000 ) {
            this.limpiarMessages();
            this.messageError = 'el valor no puede superar los 100.000.000 millones, por favor verifique';
            this.messageSuccess = undefined;
            return;
        } else
            if (fechaActual.diff(fechaSolicitud, 'days') === 0 ) {
                this.limpiarMessages();
                this.messageError = 'la fecha debe ser menor a la actual, por favor verifique';
                this.messageSuccess = undefined;
                return;
        } else
            if (fechaActual.diff(fechaSolicitud, 'years', true) < 1.5 ) {
                this.limpiarMessages();
                this.messageError = 'no cumple con la antiguedad en la empresa para el prestamo, por favor verifique';
                this.messageSuccess = undefined;
                return;
        } else
            if ( this.solicitud.salario < 800000) {
                this.limpiarMessages();
                this.messageError = 'no cumple con el salario minimo para el prestamo, por favor verifique';
                this.messageSuccess = undefined;
                return;
        } else
            if (this.solicitud.salario > 800000 && this.solicitud.salario < 1000000 ) {
                this.limpiarMessages();
                this.messageSuccess = 'credito otorgado por 5.000.000 millones';
                this.messageError = undefined;
                return;
        } else
            if (this.solicitud.salario > 1000000 && this.solicitud.salario < 4000000) {
                this.limpiarMessages();
                this.messageSuccess = 'credito otorgado por 20.000.000 millones';
                this.messageError = undefined;
                return;
        } else
            if (this.solicitud.salario > 4000000 ) {
                this.limpiarMessages();
                this.messageSuccess = 'credito otorgado por 50.000.000 millones';
                this.messageError = undefined;
                return;
            }


    }


    limpiarSolicitud() {
        this.solicitud = new Solicitud('', undefined, undefined, undefined);
    }

    limpiarMessages() {
        this.messageError = undefined;
        this.messageSuccess = undefined;
    }
}

