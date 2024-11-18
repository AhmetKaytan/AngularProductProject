import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: Category[];
  selectedCategory: Category | null;
  categoryRepository:CategoryRepository;
  
  constructor(){
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
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
