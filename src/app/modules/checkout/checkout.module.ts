import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { BuyComponent } from './components/buy/buy.component';


@NgModule({
  declarations: [
    CartComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
