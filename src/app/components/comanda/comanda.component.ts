import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrayDeProductos: Producto[];

  constructor() { 
  }

  ngOnInit(): void {
  }

  calcularTotal(){
    let resultado = 0;
    for(let producto of this.arrayDeProductos){
      resultado+=(producto.precio*producto.cantidad);
    }
    return resultado.toFixed(2);
  }

  quitarProducto(indice){
    this.arrayDeProductos.splice(indice, 1);
  }

  // quitarProducto(indice){
  //   if(this.arrayDeProductos[indice].cantidad === 1){
  //     this.arrayDeProductos.splice(indice, 1);
  //   }else{
  //     this.arrayDeProductos[indice].cantidad--;
  //   }
  // }

}
