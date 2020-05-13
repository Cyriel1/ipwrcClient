import { Component, OnInit } from '@angular/core';
import { GetService } from '../service/get.service';
import { Product } from 'src/model/get.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product;

  constructor(private getService: GetService) { 
  }

  ngOnInit() {
    this.getProducts();
  }

  changeCurrency(money: number){
    let newCurrency = new Intl.NumberFormat('en-IN', { style: "currency", currency: "EUR" }).format(money);

    return newCurrency.toString().replace(".", ",");
  }

  getProducts(){
    this.getService.getProducts().subscribe(
      getData => {
        this.products = getData;
        console.log(this.products);
      }
    )
  }

  storeOrder(product: Product, event: any){   
    if(product.productStatus != "OUT OF ORDER"){
      localStorage.setItem(btoa(product.productID.toString()), btoa(product.productName));
    }
    event.stopPropagation();
  }

  placedOrder(product: Product){
    for (let item in localStorage){
      if(localStorage.getItem(item) != null){
        if(localStorage.getItem(item) == btoa(product.productName)){
          (document.getElementById(product.productID.toString()) as HTMLImageElement).src ="assets/products/check_mark.png";
    
          return { 'background-color': '#40a7c4', 'cursor': 'default' };
        }
        (document.getElementById(product.productID.toString()) as HTMLImageElement).src ="assets/products/shopping_cart.png";
      }
    }
  }

  disableButton(product: Product){
    if(product.productStatus == "OUT OF ORDER"){

      return { 'background-color': '#D4D4D4', 'cursor': 'default' };
    }
  }

  checkButtonCondition(product: Product){

    return this.placedOrder(product) || this.disableButton(product);
  }

}
