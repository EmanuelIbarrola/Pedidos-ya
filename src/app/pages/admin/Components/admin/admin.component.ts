import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm!: FormGroup; 

  

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this.formbuilder.group( {
    
    titulo:"",
    descripcion:"",
    precio:"",
    id:"",
    imageUrl:""

    } );
  }
 
  onEnviar2(){
      console.log("form gruop : ", this.productForm.value);
    }

}
