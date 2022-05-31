import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../iproduct';
import { ProductservService } from '../productserv.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pro_id?:number;
  pro_data?:Iproduct;
  constructor( private activeroute :ActivatedRoute ,private proserv: ProductservService) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(pram=>{
      this.pro_id=pram["id"]
     this.pro_data=this.proserv.getUserById(this.pro_id)
    })
  }

}
