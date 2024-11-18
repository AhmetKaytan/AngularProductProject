import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductRepository } from '../../models/product.repository';

@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product | undefined;
  productRepository: ProductRepository;

  constructor (private route: ActivatedRoute){
    this.productRepository = new ProductRepository();
  }

  ngOnInit():void{
    this.route.params.subscribe(params => {
      const id = params["productId"];
      this.product = this.productRepository.getProductById(id);
    });
  }
}
