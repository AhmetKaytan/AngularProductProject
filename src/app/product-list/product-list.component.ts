import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
  selectedProduct:Product | null;
  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute, private http:HttpClient){
    this.productRepository = new ProductRepository();
  }

  ngOnInit():void{
    this.route.params.subscribe(params => {
      if(params["categoryId"]){
        this.products = this.productRepository.getProductsByCategoryId(params["categoryId"]);
      }else{
        this.http.get<Product[]>('https://ng-shopapp-a0729-default-rtdb.firebaseio.com/products.json')
          .subscribe(result => {
            const data: Product[] =[];
            for (const key in result){
              this.products.push({...result[key], id:key});
            }
          });
      }
    });
  }

}

