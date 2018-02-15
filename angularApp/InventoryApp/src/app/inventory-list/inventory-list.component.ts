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
public prodId:number=1;

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

  ngOnInit():void {
  this.getProducts();
  console.log(this.Inventory);
 // this.putProduct();
  //this.deleteProduct();
  }

deleteProduct(ProductId:number){
  if (confirm("Are you sure to delete?")){
    this._inventoryService.deleteInventory(ProductId).then(
      ()=>{
        this.getProducts();
      }
    )
  }
}


LoadAdd(){
  this.router.navigate(['/add']);
}

editProduct(ProductID:number){
  this.router.navigate(['/edit',ProductID]);
}


}