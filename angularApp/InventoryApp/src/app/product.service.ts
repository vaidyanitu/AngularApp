import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService {
Inventory;
  constructor() { }
showDate(){
	let ndate=new Date();
	return ndate;
}

getProducts():Product[]{
	this.Inventory=[{"ProductId":1,"ProdName":"Pen", "Price":15},
					{"ProductId":2,"ProdName":"Copy", "Price":30}
	]
	return this.Inventory;
}
}
