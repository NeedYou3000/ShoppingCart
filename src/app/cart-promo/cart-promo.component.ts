import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-promo',
  templateUrl: './cart-promo.component.html',
  styleUrls: ['./cart-promo.component.css']
})
export class CartPromoComponent implements OnInit {
  promocode: string = '';
  @Output() onChangePromoCode = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  inputPromoCode() {
    this.onChangePromoCode.emit(this.promocode);
  }

}
