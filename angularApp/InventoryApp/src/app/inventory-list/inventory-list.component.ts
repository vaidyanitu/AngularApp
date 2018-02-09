import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Shared/inventory.service';
import { Product } from '../product.model';

@Component({
  selector: 'inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  providers:[InventoryService]
})
export class InventoryListComponent implements OnInit {

Inventory:Product[];

  constructor(private _inventoryService:InventoryService) { }

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

deleteProduct1(ProductId:number):void{
  this._inventoryService.deleteInventory1(ProductId).subscribe(
  this._inventoryService.getInventory().subscribe(
    resultArray => this.Inventory = resultArray,
    error => console.log("Error::"+ error)
    )
  );
}

}
