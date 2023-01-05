export class Proyecto {
    id!: number;
    nombreProyecto: string;
    fechaRealizacion: string;
    descripcion: string;

    constructor(nombreProyecto: string, fechaRealizacion: string, descripcion: string){
        this.nombreProyecto = nombreProyecto;
        this.fechaRealizacion = fechaRealizacion;
        this.descripcion = descripcion;
    }
}
