export class Experiencia {
    
    // id?: number;
    // nombreEmpresa: string;
    // puesto: string;
    // esTrabajoActual: boolean;
    // fechaIncio: string;
    // fechaFin: string;
    // descripcion: string;
    // imagen: string;
    // url: string;

    // constructor(nombreEmpresa:string, puesto:string, esTrabajoActual:boolean, fechaIncio:string, fechaFin:string, 
    // descripcion:string, imagen:string, url:string){
    //     this.nombreEmpresa = nombreEmpresa;
    //     this.puesto = puesto;
    //     this.esTrabajoActual = esTrabajoActual;
    //     this.fechaIncio = fechaIncio;
    //     this.fechaFin = fechaFin;
    //     this.descripcion = descripcion;
    //     this.imagen = imagen;
    //     this.url = url;
    // }

    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
    
}
