import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<any>{
    return this.http.get( "https://comidas-ricas-default-rtdb.firebaseio.com/products.json");

  }
  public addProduct(produc:any): Observable<any>{
    return this.http.post( "https://comidas-ricas-default-rtdb.firebaseio.com/products.json",produc);

  }

  public deleteProduct(ID:any): Observable<any>{
    return this.http.delete( `https://comidas-ricas-default-rtdb.firebaseio.com/products/${ID}.json`);

  }

  public upDateProduct(ID:any , produc:any): Observable<any>{
    return this.http.put( `https://comidas-ricas-default-rtdb.firebaseio.com/products/${ID}.json`, produc);

  }

}
