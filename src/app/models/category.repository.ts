import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[] = [
        {id:1, name:"Phone" },
        {id:2, name:"Computer" },
        {id:3, name:"Television" }
    ];

    getCategories():Category[]{
        return this.categories;
    }

    getCategoryById(id:number){
        return this.categories.find(c=>c.id == id);
    }
}