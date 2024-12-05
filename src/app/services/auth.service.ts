import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';



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
    });
  }

  login(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email:email,
      password:password,
      returnSecureToken: true
    })
  }
}