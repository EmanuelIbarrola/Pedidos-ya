import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './Components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/Services/producto.service';




@NgModule({
  declarations: [AdminComponent],

  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [ProductoService],
})
export class AdminModule { }
