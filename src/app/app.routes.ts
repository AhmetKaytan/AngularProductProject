import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthComponent } from './auth/auth.component';
import { AdminGuard } from './guards/admin-guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent },
    {path:'', redirectTo: '/home', pathMatch: 'full' },
    {path: 'products', loadChildren: () => import('./product-list/product-list.component').then(m=>m.ProductListComponent) },
    {path: 'products/create', component:ProductCreateComponent, canActivate: [AdminGuard]},
    {path: 'categories/create', component:CategoryCreateComponent, canActivate: [AdminGuard]},
    {path:'products', component:ProductListComponent },
    {path:'products/:productId', component:ProductComponent },
    {path: 'products/category/:categoryId', component:ProductListComponent},
    {path: 'auth', component:AuthComponent},
    {path: '**', component:NotFoundComponent}

];
