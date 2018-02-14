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

addInventory() :void{
this.http.post(this.url, {
      ProductId: 5,
      ProdName: 'Soap',
      Price: 20
    }).subscribe(
      res=>{
        return res;
      }
    );
}

addInventory1(product :Product) :void{
this.http.post(this.url, {
      ProdName:product.ProdName,
      Price:product.Price
    })
      .toPromise().then();
}


putInventory():void{
	this.http.put(this.url+'/1002',{
		 ProductId: 1002,
      ProdName: 'Soap',
      Price: 25
	}).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
}

deleteInventory():void{
	this.http.delete(this.url+'/1002').subscribe(res=> {console.log(res);},
		err => {console.log("Error occured::" + err);});
}

deleteInventory1(productId:number):Promise<any>{
  //this.http.delete(this.url+'/'+productId);
  return this.http.delete(this.url+'/'+productId).toPromise().then(
    //() => {
      //this.getInventory();
    //}
)
}


 private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
}
