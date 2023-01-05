export class FormacionAcademica {

    id?: number;
    institucion: string;
    titulo: string;
    fechaInicio: string;
    fechaFin: string;
    imagen: string;

    constructor(institucion: string, titulo: string, fechaInicio: string, fechaFin: string, imagen: string){
        this.institucion = institucion;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.imagen = imagen;
    }
}

