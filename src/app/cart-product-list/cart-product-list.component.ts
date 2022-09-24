import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.component';


@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css']
})
export class CartProductListComponent implements OnInit {
  @Output() onChangeQuantity = new EventEmitter();
  @Output() onDeleteProduct = new EventEmitter<number>();

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(id: number) {
    this.onDeleteProduct.emit(id);
  }

  changeQuantity() {
    this.onChangeQuantity.emit();
  }
}
