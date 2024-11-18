import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService]
})
export class ProductListComponent {

  products: Product[] = [];
  selectedProduct:Product | null;

  constructor(private route: ActivatedRoute,private productService:ProductService){
  }

  ngOnInit():void{
    this.route.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data =>{
        this.products = data;
      })
    });
  }

}

