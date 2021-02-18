import { AuthGuard } from './shared/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/Interceptores/auth.interceptor';
import { AutentificaciónService } from './shared/Services/autentificación.service';


const routes: Routes = [
  {path:"" , redirectTo:"login", pathMatch:"full"},
  {path:"login", loadChildren: ()=> import("../app/Login/login.module").then(m=>m.LoginModule)},
  {
    path:"pages", loadChildren:()=> import("./Pages/pages.module").then(m=>m.PagesModule),
    canActivate:[AuthGuard]

  },


];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,


  ],
  providers: [
    AutentificaciónService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
