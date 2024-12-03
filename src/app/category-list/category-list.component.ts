import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  providers: [CategoryService]
})
export class CategoryListComponent {

  categories: Category[];
  selectedCategory: Category | null;
  
  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void{
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    });
  }

  displayAll = true;
  selectCategory(category?: Category){
    if (category){
      this.selectedCategory = category;
      this.displayAll = false;
    }else{
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
