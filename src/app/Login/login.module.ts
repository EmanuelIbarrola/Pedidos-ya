import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgElseDirective } from 'src/app/shared/Directivas/ng-else.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:LoginComponent},

  ];

@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
})
export class LoginModule { }
