import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { ProductoService } from 'src/app/Services/producto.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [ProductoService],
})
export class HomeModule { }
