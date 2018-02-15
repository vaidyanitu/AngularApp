import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";


@Injectable()
export class InventoryService {
Inventory:Product[];
  constructor(private http :Http) {
     }
 private url="http://localhost:58365/api/product";

getInventory(): Observable<Product[]>{

	return this.http.get(this.url).map((response:Response)=>{
		return <Product[]> response.json();
	}).catch(this.handleError);
}

addInventory(product :Product) :void{
this.http.post(this.url, {
      ProdName:product.ProdName,
      Price:product.Price
    })
      .toPromise().then();
}

deleteInventory(productId:number):Promise<any>{
  //this.http.delete(this.url+'/'+productId);
  return this.http.delete(this.url+'/'+productId).toPromise().then(
    //() => {
      //this.getInventory();
    //}
)
}

editInventory(prod:Product, prodId:number):void{
  return this.http.put(this.url+'/'+prodId,{
  ProdName:prod.ProdName,
      Price:prod.Price,
      ProductID:prod.ProductID
  })
}


getEditInventory(productId:number):Observable<Product>{
  return this.http.get(this.url+'/'+productId).map((response:Response)=> {
  return <Product> response.json();
  }).catch(this.handleError);
}

 private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
}
