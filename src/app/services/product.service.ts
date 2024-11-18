import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable } from "rxjs";

//local service
@Injectable()
export class ProductService{
    private url = "https://ng-shopapp-a0729-default-rtdb.firebaseio.com/";

    constructor(private http: HttpClient){

    }

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.url + "products.json");
    }

    getProductById(id:string):Observable<Product>{
        return this.http.get<Product>(this.url + "products/" + id + ".json"); 
    }

    createProduct(product:Product):Observable<Product>{
        return this.http.post<Product>(this.url+ "products.json",product);
    }
}