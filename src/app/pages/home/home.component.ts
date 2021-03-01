import { ProductoService } from '../../shared/Services/producto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutentificaciónService } from 'src/app/shared/Services/autentificación.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {

  productos: any[] = [];


  productSubs: Subscription = new Subscription;

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
   this.productSubs= this.productoService.getProduct().subscribe( res =>{
    Object.entries(res).map(p => this.productos.push(p[1]));
   })
  }

  ngOnDestroy(): void {
    this.productSubs.unsubscribe();
  }
}
