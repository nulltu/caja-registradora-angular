import { stringify } from "@angular/compiler/src/util";

export class Producto{

    nombre: string;
    imagenUrl: string;
    precio: number;


    constructor(pNombre: string, pImagenUrl:string, pPrecio: number){
        this.nombre = pNombre;
        this.imagenUrl = pImagenUrl;
        this.precio = pPrecio;
    }

}