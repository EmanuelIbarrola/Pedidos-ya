import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

  }
  private buildForm() {
    this.form =this.formbuilder.group({
      Email:['',[Validators.required,Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
     });
  }

  save() {
    if(this.form.valid){
      console.log(  this.form.value);
    }else{
      this.form.markAllAsTouched();
    }
 }

 get emailCampo(){
   return this.form.get('Email');
 }

 get passCampo(){
  return this.form.get('pass');
}

}
