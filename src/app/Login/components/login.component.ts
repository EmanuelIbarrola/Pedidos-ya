import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  onLogin(form: { value: any; }){

      console.log("Formulario: ", form.value);
  }
}
