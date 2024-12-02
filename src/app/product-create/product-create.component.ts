import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers:[CategoryService]
})
export class ProductCreateComponent {

  categories:Category[] = [];
  error:string = "";
  
  constructor(private productService: ProductService, private categoryService:CategoryService, private router:Router){

  }

  ngOnInit():void{
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data;
    });
  }

  saveProduct(name:any,price:any,imageUrl:any,description:any,isActive:any,categoryId:any){

    //form validations
    if (name.value == "" || name.value.length < 3 ){
      this.error = "ürün ismi en az 3 karakter olmalıdır!";
      return;
    }

    if (price.value == ""){
      this.error = "ürün fiyatı boş olamaz!";
      return;
    }

    if (imageUrl.value == ""){
      this.error = "resim bilgisi giriniz!";
      return;
    }

    const extensions = ["jpeg","jpg","png"];
    const extension = imageUrl.value.split(".").pop();

    if (extensions.indexOf(extension) == -1){
      this.error = "resim uzantısı sadece .jpeg , .jpg veya .png olabilir!";
      return;
    }

    if (categoryId.value == 0){
      this.error = "kategori seçmelisiniz!";
      return;
    }

    const product = {
      id:1, 
      name:name.value, 
      price: price.value, 
      imageUrl: imageUrl.value, 
      description:description.value, 
      isActive: isActive.checked, 
      categoryId: categoryId.value
    };

    this.productService.createProduct(product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
