import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../Shared/inventory.service';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

EditProduct=new FormGroup({
	ProdName:new FormControl(),
	Price:new FormControl(),
	ProductID:new FormControl()
})

private prodId:number;
Inventory:Product={ProdName:'Test',Price:'',ProductID:''};

  constructor(private _inventoryService:InventoryService, private router:Router, private route:ActivatedRoute ) { 
  //this.getEditProduct(this.prodId);
 

  }

  ngOnInit() {
  	 this.route.params.subscribe( params=>{
  	 this.prodId=+params['id'];
  })
  	 this._inventoryService.getEditInventory(this.prodId).subscribe(
	 res=>{this.Inventory=res,console.log(res);},
	 err=>console.log("error:",err));
  }


onSubmit(prod:Product){
this._inventoryService.editInventory(prod,this.prodId).subscribe(
  res=>console.log(res),
  err=> console.log("error:",err),
  ()=> this.router.navigate(['/inventory']);)
}

}
