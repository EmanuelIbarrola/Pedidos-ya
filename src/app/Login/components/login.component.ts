import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificaciónService } from 'src/app/Services/autentificación.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private autentificaciónService:AutentificaciónService) {}

  ngOnInit(): void {}
  
  onlogin(form: any) {
    console.log("FORM: ",form.value)
    this.autentificaciónService.Login(form.value).subscribe( res =>{
      console.log("Login Response: ", res)
    },
    error=>{
      console.log("Login Error: ",error)

    }

    )

  }

}
