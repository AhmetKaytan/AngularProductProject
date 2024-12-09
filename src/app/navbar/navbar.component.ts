import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated:boolean = false;

  constructor(private authService:AuthService){ }

  ngOnInit():void{
    this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user;
    })
  }

}
