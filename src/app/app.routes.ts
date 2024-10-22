import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path:"", component:HomeComponent },
    {path:"about", component:AboutComponent },
    {path:"products", component:ProductComponent },
    {path:"products/productDetail", component:ProductDetailComponent }
];
