import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  subscription: Subscription;
  products = [];
  product = new Product();
  constructor(private _communicateService: CommunicateService, private _route: ActivatedRoute) {
    this.retrieveCurrentProductData();
    this.subscription = _communicateService.observedProducts.subscribe(
      (updatedProducts) => { this.products = updatedProducts;},
      (err) => {},
      () => {}
    )
    this._route.params.subscribe((param)=>{
      console.log("idx: ", param.idx);
      this.product = this.products[param.idx];
    }) 
   }
  onDestroy(){
    this.subscription.unsubscribe();
  }
  updateProducts(){
    this._communicateService.updateProducts(this.products);
  }

  retrieveCurrentProductData(){
    this.products = this._communicateService.observedProducts.getValue();
  }
  ngOnInit() {

  }
  onSubmit(form){
    this.updateProducts();
  }
  onDelete(product){
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }
}
