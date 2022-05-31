import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productData?:Iproduct
  @Output() productSelected: EventEmitter<Iproduct>=new EventEmitter<Iproduct>();
  constructor() { }

  ngOnInit(): void {
  }
  getProduct(){
    
  }
}
