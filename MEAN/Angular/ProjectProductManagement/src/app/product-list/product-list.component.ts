import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  subscription: Subscription;
  products = this._communicateService.observedProducts.getValue();
  constructor(private _communicateService: CommunicateService) {
    this._communicateService.updateProducts(this.products);
    this.subscription = _communicateService.observedProducts.subscribe(
      (updatedProducts) => { this.products = updatedProducts;},
      (err) => {},
      () => {}
    )
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
  
  onDelete(product){
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }

  ngOnInit() {
    console.log('ngOnInit')
    console.log(this.products);
    this.retrieveCurrentProductData();
  }

}
