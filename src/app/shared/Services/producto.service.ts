
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url=environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<any>{
    return this.http.get( `${this.url}/products.json`);

  }
  public getProductById(id: any): Observable<any>{
    return this.http.get( `${this.url}/products.json?orderBy="id"&equalTo="${id}"&print=pretty`);

  }
  public addProduct(produc:any): Observable<any>{
    return this.http.post( `${this.url}/products.json`,produc);

  }

  public deleteProduct(ID:any): Observable<any>{
    return this.http.delete( `${this.url}/products/${ID}.json`);

  }

  public upDateProduct(ID:any , produc:any): Observable<any>{
    return this.http.put( `${this.url}/products/${ID}.json`, produc);

  }

}
