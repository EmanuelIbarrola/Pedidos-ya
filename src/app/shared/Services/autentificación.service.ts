import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutentificaciónService {
  key = environment.auth.key;
  url = environment.auth.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public Login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(

      map((res: any) => { this.authAcceso(res.idToken,res.localId); return res; })
      
    );
  }


  private authAcceso(token: string,userId:string): void {
    localStorage.setItem('auth', token);
    localStorage.setItem('userId', userId);
  }


}
