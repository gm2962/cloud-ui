import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {test_module} from "./test/landing";
import {micro3_component} from "./microservice3/micro3_component";
import {m3_orders} from "./microservice3/orders/m3_orders";
import {m3_users} from "./microservice3/users/m3_users";
import {m3_products} from "./microservice3/products/m3_products";

const routes: Routes = [
  {path:'landing', component: test_module},
  {path:'microservice3', component: micro3_component},
  {path:'microservice3/orders', component: m3_orders},
  {path:'microservice3/users', component: m3_users},
  {path:'microservice3/products', component: m3_products}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
