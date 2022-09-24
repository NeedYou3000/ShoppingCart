import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { CartPromoComponent } from './cart-promo/cart-promo.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartProductListComponent,
    CartPromoComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
