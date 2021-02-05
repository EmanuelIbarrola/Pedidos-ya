import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { identity, Subscription } from 'rxjs';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit , OnDestroy{

  // productForm : FormGroup ;

  error : string =""
  ErrorDelete: string=""

  editId: any;
  productSubs: Subscription = new Subscription;


  productos: any[] = [];

  Subsproduct: Subscription = new Subscription;

  productForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl()
});

  constructor(private formbuilder: FormBuilder, private productoService: ProductoService) { }


  ngOnInit(): void {
    this.LoadProduct();
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
      this.LoadProduct();
      },
      err =>{
        this.error=" Error de servidor"
      }

      );
    }
    LoadProduct():void{
      this.productos=[];
      this.productSubs= this.productoService.getProduct().subscribe( res =>{
        Object.entries(res).map((p:any) => this.productos.push({ID: p[0], ... p[1]}))
        console.log("iD ", this.productos)
       })

    }
    onDelete(id: any):void {
      this.productoService.deleteProduct(id).subscribe(res => {res
        console.log("Respose:", res)
        this.LoadProduct()
      },
      error =>{
        console.log("error:", error)
        this.ErrorDelete="No se ha podido eliminar"
      }

      )
    }
     onEdit(comidas: any) : void{
      this.productForm.patchValue(comidas)
      this.editId= comidas.ID
     }

     Modificar(): void{
       this.productoService.upDateProduct( this.editId ,this.productForm.value).subscribe(res=> {
        console.log("Resp", res);
        this.LoadProduct();
        },
        err =>{
          console.log(err)
        }

        );
     }

    ngOnDestroy(): void {
      this.productSubs.unsubscribe();
      this.Subsproduct.unsubscribe();
    }


}
