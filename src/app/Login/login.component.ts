import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificaciónService } from 'src/app/shared/Services/autentificación.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private autentificaciónService:AutentificaciónService) {}
    LoginError=""
  ngOnInit(): void {}

  onlogin(form: any) {
    console.log("FORM: ",form.value)

    this.autentificaciónService.Login({
      email:form.value.email,
      password:form.value.password,
      returnSecureToken:true
    }).subscribe( res =>{
      console.log("Login Response: ", res)
      this.router.navigate(['pages'])
      
    },
    error=>{
      console.log("Login Error: ",error)
      this.LoginError="Error al Iniciar Secion"
    }

    )

  }

}
