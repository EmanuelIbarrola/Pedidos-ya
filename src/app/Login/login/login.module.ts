import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../components/login.component';
import { NgElseDirective } from 'src/app/Directivas/ng-else.directive';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
