import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent }from "./product/product-list/product-list.component"
import {ProductDetailComponent }from "./product/product-detail/product-detail.component"
const routes: Routes = [
  {path:"allproduct",component:ProductListComponent},
  {path:"details/:id",component:ProductDetailComponent},
  {path:"" ,redirectTo:"allproduct",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
