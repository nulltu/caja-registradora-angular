import { Component } from '@angular/core';
import { Producto } from '../../src/app/models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrayComida: Producto[];
  arrayBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor(){

    this.productosSeleccionados=[];

    this.arrayComida = [
      new Producto('Hamburguesa', 'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/04/15212443/RFB-1303-3-hamburguesadecerdo.jpg', 50.60),
      new Producto('Lomito', 'https://d35hsl9am8s2ta.cloudfront.net/public/images/2019/10/Buen-Provecho-773x458.jpeg', 70.30),
      new Producto('Anticucho', 'http://www.rusticadelivery.com/images/products/48/48-1602450609-5f8374b1666d0.jpeg', 85),
      new Producto('Empanadas Árabes', 'https://i.ytimg.com/vi/PEvI5nj0lNg/maxresdefault.jpg', 20.75)
    ]

    this.arrayBebida = [
      new Producto('Inca Kola', 'https://johnnyrockets.pe/wp-content/uploads/2020/06/incakola-500ml.png', 2.75),
      new Producto('Seven up', 'https://nave3.com.ar/wp-content/uploads/2020/03/SevenUpFree.png', 1.80),
      new Producto('Coca-Cola', 'https://nave3.com.ar/wp-content/uploads/2020/03/SevenUpFree.png', 1.25),
      new Producto('Mirinda', 'http://3.bp.blogspot.com/-82BleBSc3KU/T-6YjNz-oiI/AAAAAAAAAn0/qJ9k3nPD81k/s1600/mirinda1.jpg', 2.50)
    ]
  }
  onProductoSeleccionado($event){
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  }
}
