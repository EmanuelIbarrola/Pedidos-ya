import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpErrorResponse,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AutentificaciónService } from '../Services/autentificación.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private autentificaciónService: AutentificaciónService, private router:Router) {}

intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
 const token = this.autentificaciónService.getToken();
  if (token) {
   request = request.clone({
    url:
     request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}`: `${request.url}?auth=${token}`, });

  }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse)=> {
        if(err.status === 401){
          this.Error401();
        }
        return throwError('error') ;

      })
    );
  }
  private Error401() : Observable<any>{
    this.autentificaciónService.Logout();  
    return throwError('error') ;
  }

}
