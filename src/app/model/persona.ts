export class Persona {

    id?: number;
    nombreCompleto: string;
    titulo: string;
    domicilio: string;
    fechaNac: string;
    sobreMi: string;
    foto: string;


    constructor(nombreCompleto:string, titulo:string, domicilio:string, fechaNac:string, sobreMi:string, foto:string){
        this.nombreCompleto = nombreCompleto;
        this.titulo = titulo;
        this.domicilio = domicilio;
        this.fechaNac = fechaNac;
        this.sobreMi = sobreMi;
        this.foto = foto;
    }
}
