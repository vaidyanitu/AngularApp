import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../Shared/inventory.service';
import { Router} from '@angular/router';


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

  constructor(private _inventoryService:InventoryService,private router: Router) { 
this.router= router;
  }

  ngOnInit() {
  }

onSubmit(data){
this._inventoryService.addInventory(data).subscribe(
res=>console.log(res),
err=>console.log("error:",err),
()=>this.router.navigate(['inventory']);
);

}


}




