import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/shared/Services/producto.service';





@NgModule({
  declarations: [AdminComponent],

  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [ProductoService],
})
export class AdminModule { }
