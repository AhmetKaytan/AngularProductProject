import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';

export const routes: Routes = [
    {path:'', component:HomeComponent },
    {path: 'products/create', component:ProductCreateComponent},
    {path:'products', component:ProductListComponent },
    {path:'products/:productId', component:ProductComponent },
    {path: 'products/category/:categoryId', component:ProductListComponent}
];
