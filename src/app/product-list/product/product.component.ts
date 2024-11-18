import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product | undefined;
  

  constructor (private route: ActivatedRoute, private productService: ProductService){
    
  }

  ngOnInit():void{
    this.route.params.subscribe(params => {
      const id = params["productId"];

      this.productService.getProductById(id).subscribe(result=>{
        this.product = {...result, id:id} 
      });
    });
  }
}
