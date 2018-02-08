import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

AddProduct=new FormGroup({
	ProductName:new FormControl(),
	ProdPrice:new FormControl()
})

  constructor() { }

  ngOnInit() {
  }

}
