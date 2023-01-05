export class Curso {

    id?: number;
    nombreCurso: string;
    titulo: string;
    fechaInicio: string;
    fechaFin: string;


    constructor(nombreCurso:string, titulo:string, fechaInicio:string, fechaFin:string){
        this.nombreCurso = nombreCurso;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
