import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../components/login.component';
import { NgElseDirective } from 'src/app/Directivas/ng-else.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutentificaciónService } from 'src/app/Services/autentificación.service';



@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective,
   
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ AutentificaciónService],
})
export class LoginModule { }
