import { ProductoService } from './../../../../Services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
   this.productoService.getProduct().subscribe( res =>{
    Object.entries(res).map(p => this.productos.push(p[1]));
   })

  }
}
