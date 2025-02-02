import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const appRoutes: Routes = [
  { path: 'inventory', component: InventoryListComponent },
  { path: 'add',  component: AddProductComponent },
  { path: 'edit/:id',  component: EditProductComponent },
  { path: '',
    redirectTo: '/inventory',
    pathMatch: 'full'
  }
];

@NgModule({
	imports:[
	RouterModule.forRoot(
	appRoutes
	)
	],
	exports:[
	RouterModule
	]
})


export class AppRoutingModule {}
