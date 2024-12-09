import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key= "";

  constructor(private http: HttpClient) { }

  register(email:string, password:string){

    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email:email,
      password:password,
      returnSecureToken: true
    }).pipe(
      tap(response =>{
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000));
        const user = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );
        console.log(user);
      }),
      catchError(this.handleError)
    );
  }

  login(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email:email,
      password:password,
      returnSecureToken: true
    }).pipe(
      tap(response =>{
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000));
        const user = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );
        console.log(user);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let message = "hata oluştu";

    if(err.error.error){
      switch(err.error.error.message){
        case "EMAIL_EXISTS":
          message = "Bu Mail Adresi Zaten Kullanılıyor"
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Bir Süre Bekleyip Tekrar Deneyiniz"
          break;
        case "INVALID_LOGIN_CREDENTIALS":
          message = "E-mail Adresinizi veya Şifrenizi Yanlış Girdiniz"
      }
    }

    return throwError(()=>message); 
  }
}