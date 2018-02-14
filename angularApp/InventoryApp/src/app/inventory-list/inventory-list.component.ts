import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Shared/inventory.service';
import { Product } from '../product.model';
import { Router} from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  providers:[InventoryService]
})
export class InventoryListComponent implements OnInit {

Inventory:Product[];
private url="http://localhost:58365/api/product";


constructor(private _inventoryService:InventoryService,
 private http:Http, private router: Router) { 
this.getProducts();
this.router=router;
}

getProducts():void{
	this._inventoryService.getInventory().subscribe(
		resultArray => this.Inventory = resultArray,
		error => console.log("Error::"+ error)
		)
}

addProduct() : void{
this._inventoryService.addInventory();
}

putProduct():void{
  this._inventoryService.putInventory();
}

deleteProduct():void{
  this._inventoryService.deleteInventory();
}

  ngOnInit():void {
  this.getProducts();
  console.log(this.Inventory);
 // this.putProduct();
  //this.deleteProduct();
  }

deleteProduct1(ProductId:number){
  if (confirm("Are you sure to delete?")){
    this._inventoryService.deleteInventory1(ProductId).then(
      ()=>{
        this.getProducts();
      }
    )
  }
}


LoadAdd(){
  this.router.navigate(['/add']);
}




}