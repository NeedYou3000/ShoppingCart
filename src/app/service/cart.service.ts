import { Injectable } from '@angular/core';
import { Product } from '../cart-product-list/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/200x150',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      price: 5.99,
      quantity: 3
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200x150',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 1
    }
  ]

  constructor() {
  }

  deleteProduct(id: number){
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  checkPromoCode(promoCode: string, subtotal: number, applyDiscount: boolean): number {
    let discount = 0;
    if (promoCode === "abc" && !applyDiscount) {
      discount = 0.3 * subtotal;
      applyDiscount = true;

    }
    return discount;
  }
}
