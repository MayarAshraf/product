import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './Components/select/select.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path:'Select',component:SelectComponent},
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductItemComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
