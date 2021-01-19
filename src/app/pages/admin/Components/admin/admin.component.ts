import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit , OnDestroy{

  // productForm : FormGroup ;
  error : string =""
  productSubs: Subscription = new Subscription;

  productForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl()
});

  constructor(private formbuilder: FormBuilder, private productoService: ProductoService) { }


  ngOnInit(): void {
    this.productForm=this.formbuilder.group( {

    titulo:["",[Validators.required, Validators.minLength(4)]],

    descripcion:["",[Validators.required, Validators.minLength(4)]],

    precio:["",[Validators.required, Validators.minLength(1)]],

    id:["",[Validators.required, Validators.minLength(1)]],

    imageUrl:["",[Validators.required, Validators.minLength(4)]],

    } );
  }

  onEnviar(){
      console.log("form gruop : ", this.productForm.value);
      this.productSubs= this.productoService.addProduct(this.productForm.value).subscribe(res=> {
      console.log("Resp", res);
      },
      err =>{
        this.error=" Error de servidor"
      }

      );
    }

    ngOnDestroy(): void {
      this.productSubs.unsubscribe();
    }

}
