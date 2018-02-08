import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { InventoryService } from './Shared/inventory.service';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    InventoryListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
