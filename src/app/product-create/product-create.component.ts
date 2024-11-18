import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  constructor(private productService: ProductService, private router:Router){

  }

  saveProduct(name:any,price:any,imageUrl:any,description:any,isActive:any,categodyId:any){

    const product = {
      id:1, 
      name:name.value, 
      price: price.value, 
      imageUrl: imageUrl.value, 
      description:description.value, 
      isActive: isActive.checked, 
      categodyId: categodyId
    };

    this.productService.createProduct(product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
