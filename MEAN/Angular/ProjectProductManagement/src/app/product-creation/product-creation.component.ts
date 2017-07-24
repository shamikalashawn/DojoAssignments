import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  subscription: Subscription;  
  products = [];
  product = new Product();

  constructor(private _communicateService: CommunicateService) { 
    this.retrieveCurrentProductData();
    this.subscription = _communicateService.observedProducts.subscribe(
      (updatedProducts) => { this.products = updatedProducts;},
      (err) => {},
      () => {}
    )
  }

  ngOnInit() {
  }

  updateProducts(){
    this._communicateService.updateProducts(this.products);
  }

  retrieveCurrentProductData(){
    this.products = this._communicateService.observedProducts.getValue();
  }
  
  onSubmit(form){
    console.log(this.product);
    console.log('products before: ', this.products)
    this.products.push(this.product);
    console.log('products after push: ', this.products)
    this.updateProducts();
    console.log('products after updateProducts: ', this.products)
    this.retrieveCurrentProductData();
    console.log('products after retrieveCurrentProductData: ', this.products)
    this.product = new Product();
    form.reset();
  }
}
