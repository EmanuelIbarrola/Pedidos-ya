import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // productForm : FormGroup ;

  productForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl()
});

  constructor(private formbuilder: FormBuilder, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productForm=this.formbuilder.group( {

    titulo:["titulo",[Validators.required, Validators.minLength(4)]],

    descripcion:["descripcion",[Validators.required, Validators.minLength(4)]],

    precio:["precio",[Validators.required, Validators.minLength(4)]],

    id:["id",[Validators.required, Validators.minLength(1)]],

    imageUrl:["imageUrl",[Validators.required, Validators.minLength(4)]],

    } );
  }

  onEnviar2(){
      console.log("form gruop : ", this.productForm.value);
      this.productoService.addProduct(this.productForm.value).subscribe(res=> res)
    }

}
