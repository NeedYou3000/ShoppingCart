import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  @Input() subtotal: number = 0;
  @Input() tax: number = 0;
  @Input() total: number = 0;
  @Input() discount!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
