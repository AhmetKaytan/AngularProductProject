import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers:[CategoryService]
})
export class ProductCreateComponent {

  categories:Category[] = [];
  error:string = "";
  model:any = {
    name: "iphone17",
    price: "20000",
    categoryId: "0"
  };
  //two way binding

  //ngform => form
  //valid-invalid
  //pristine-dirty
  //touched-untouched


  constructor(private productService: ProductService, private categoryService:CategoryService, private router:Router){

  }

  ngOnInit():void{
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data;
    });
  }

  saveProduct(form:NgForm){
    const extensions = ["jpeg","jpg","png"];
    const extension = this.model.imageUrl.split(".").pop();

    if (extensions.indexOf(extension) == -1){
      this.error = "resim uzantısı sadece .jpeg , .jpg veya .png olabilir!";
      return;
    }

    if (this.model.categoryId == 0){
      this.error = "kategori seçmelisiniz!";
      return;
    }

    const product = {
      id:1, 
      name:this.model.name, 
      price: this.model.price, 
      imageUrl: this.model.imageUrl, 
      description:this.model.description, 
      isActive: this.model.isActive, 
      categoryId: this.model.categoryId
    };


    if (form.valid){
      this.productService.createProduct(product).subscribe(data => {
        this.router.navigate(['/products']);
      });
    }else{
      this.error = "Formunuzda hata bulunmaktadır!";
    }
  }
}
