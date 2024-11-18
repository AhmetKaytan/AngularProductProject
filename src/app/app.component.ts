import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,ProductListComponent, CommonModule, CategoryListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'Home Page';

  constructor(private http:HttpClient){ }

  getTitle(){
    return this.title;
  }

  createProduct(){
    const product = {id:1, 
      name:"iphone 22", 
      price: 20000, 
      imageUrl: "3.jpeg", 
      description:"iyi telefon", 
      isActive: true, 
      categodyId: 1
    };

    this.http.post('https://ng-shopapp-a0729-default-rtdb.firebaseio.com/products.json', product)
      .subscribe(data => console.log(data));
  }
}
