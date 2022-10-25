import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";
import {ProductsModel} from "../../model/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products?:ProductsModel[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
 onGetAllProducts(){
    this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
    },error => {
           console.log(error);
    })
 }

  onGetSelectedProducts() {
    this.productsService.getSelectedProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error);
    })
  }

  onGetAvailableProducts() {
    this.productsService.getAvailableProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error);
    })
  }
}
