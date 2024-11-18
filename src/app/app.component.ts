import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,ProductListComponent, CommonModule, CategoryListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent {
  private title = 'Home Page';

  constructor(private http:HttpClient, private productService: ProductService){ }

  getTitle(){
    return this.title;
  }

}
