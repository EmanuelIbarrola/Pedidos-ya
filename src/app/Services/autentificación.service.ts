import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificaciónService {

  constructor(private http: HttpClient) { }

  public Login(body:any): Observable<any>{
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQVdNSpLbCwVAyagkwVVj-m9naxAfVETY",body);

  }

}
