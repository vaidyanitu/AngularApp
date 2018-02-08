import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
title='Inventory';
Inventory: Product[];
todayDate;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
  this.todayDate= this._productService.showDate();
  this.Inventory=this._productService.getProducts();
  }

}
