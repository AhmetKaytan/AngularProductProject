import { Product } from "./product";

export class ProductRepository{
    private products:Product[] = [
        {id:1, name:"iphone 14", price: 20000, imageUrl: "1.jpeg", description:"iyi telefon", isActive: true, categodyId: 1},
        {id:2, name:"iphone 15", price: 30000, imageUrl: "2.jpeg", description:"iyi telefon", isActive: true, categodyId: 1},
        {id:3, name:"iphone 16", price: 40000, imageUrl: "3.jpeg", description:"iyi telefon", isActive: true, categodyId: 1},
        {id:4, name:"iphone 17", price: 50000, imageUrl: "1.jpeg", description:"iyi telefon", isActive: true, categodyId: 2},
        {id:5, name:"iphone 18", price: 60000, imageUrl: "2.jpeg", description:"iyi telefon", isActive: true, categodyId: 2},
        {id:6, name:"iphone 19", price: 70000, imageUrl: "3.jpeg", description:"iyi telefon", isActive: true, categodyId: 3}
    ];
    
    getProducts():Product[]{
        return this.products.filter(p=>p.isActive);
    }
    
    getProductById(id:number){
        return this.products.find(p => p.id == id);
    }
    
    getProductsByCategoryId(id:number):Product[] {
        return this.products.filter(p=>p.categodyId == id);
    }
}