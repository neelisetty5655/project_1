import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppDisplayComponent } from './app-display/app-display.component';

const routes: Routes = [
  { path: "product", component: ProductComponent },
  { path: "seller", component: SellerComponent},
  { path: "buyer", component: BuyerComponent },
  { path: "customer", component: CustomerComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "app-display", component: AppDisplayComponent },
  {path:' ',component: SignInComponent},
  {path:'**',component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
