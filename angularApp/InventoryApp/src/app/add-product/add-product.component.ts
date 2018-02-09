import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../Shared/inventory.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

AddProduct=new FormGroup({
	ProdName:new FormControl(),
	Price:new FormControl()
})

  constructor(private _inventoryService:InventoryService) { }

  ngOnInit() {
  }

onSubmit(data){
this._inventoryService.addInventory1(data);
this.ProdName="";
this.Price="";
}

}
