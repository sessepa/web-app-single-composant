import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";

const  routes : Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
