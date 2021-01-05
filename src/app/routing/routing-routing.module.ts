import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:"login", pathMatch:"full"},
  {path:"login", loadChildren: ()=> import("../Login/login/login.module").then(m=>m.LoginModule)},
  {path:"pages", loadChildren:()=> import("../Pages/pages/pages.module").then(m=>m.PagesModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
