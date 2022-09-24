import { Component } from '@angular/core';
import { Product } from './cart-product-list/product.component';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping';
  totalItems: number = 0;
  products: Product[];
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;
  discount: number = 0;
  applyDiscount = false;

  constructor(private cartService: CartService) {
    this.products = this.cartService.products;
    this.updateValue();
  }

  updateValue() {
    this.subtotal = 0;
    this.totalItems = 0;

    console.log(this.cartService.products);
    this.products.forEach(element => {
      this.subtotal += (element.price * element.quantity);
      this.totalItems += 1;
    });

    this.tax = 0.1 * this.subtotal;
    this.total = this.subtotal + this.tax - this.discount;
  }


  handleChangeQuantity() {
    this.applyDiscount = false;
    this.discount = 0;
    this.updateValue();
  }

  handlePromoCode(promoCode: string) {
    this.discount = this.cartService.checkPromoCode(promoCode, this.subtotal, this.applyDiscount);

    if (this.discount !== 0) {
      this.applyDiscount = true;
      this.updateValue();
    }
  }

  handleDeleteProduct(id: number) {
    this.cartService.deleteProduct(id);
    this.applyDiscount = false;
    this.discount = 0;
    this.updateValue();
  }
}
