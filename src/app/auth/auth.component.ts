import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private authService:AuthService){

  }
  isLoginMode: boolean = true;
  loading:boolean = false;
  error:string = "";


  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  handleAuth(form: NgForm){
    if(!form.valid){
      return;
    }

    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    let authResponse:Observable<AuthResponse>;

    if(this.isLoginMode){
      authResponse = this.authService.login(email,password);
    }else{
      authResponse = this.authService.register(email,password);
    }

    authResponse.subscribe({

      next: (response)=>{
        this.loading = false;
        this.error = "";
        console.log(response);
      },

      error: (err)=>{
        this.loading = false;
        this.error = err;
      }
    });
  }
}