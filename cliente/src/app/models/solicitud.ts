export class Solicitud {
    constructor(
        public nombreEmpresa: string,
        public nit: number,
        public salario: number,
        public fIngreso: Date
    ) { }
}
