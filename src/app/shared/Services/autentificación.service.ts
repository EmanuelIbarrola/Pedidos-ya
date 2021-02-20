import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutentificaciónService {
  key = environment.auth.key;
  url = environment.auth.apiBaseUrl;


  constructor(private http: HttpClient, private router: Router) {}

  public Login(body: any): Observable<any> {
    return this.http
      .post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body)
      .pipe(
        map((res: any) => {
          this.authAcceso(res.idToken, res.localId);
          return res;
        })
      );
  }

  private authAcceso(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getUserId() {
    return localStorage.getItem('userId');
  }

  public verificacionLogueado(): Boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  public Logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }

}
