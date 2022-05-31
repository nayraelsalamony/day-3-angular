import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductservService } from '../productserv.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allpro?:Iproduct[];
  selectedProduct?: Iproduct;
  constructor(private prodectserv:ProductservService) { }

  ngOnInit(): void {
   this.allpro= this.prodectserv.getAllProduct()
  }
  printProduct(e:any){
     this.selectedProduct=e;
  }

}
