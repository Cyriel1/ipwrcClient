import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Product{
    productID: number,
    productName: string,
    productPrice: number,
    productDescription: string,
    productStatus: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productsFromServer: Product;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getCookie(cname: string) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  getProducts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getCookie('ESSENTIALS'),
        'CSRF-TOKEN': 'CSRF ' + sessionStorage.getItem("")
      })
    };
    this.http.get<Product>('http://localhost:8080/application/product/getProducts', httpOptions)
    .subscribe(
      getData => {
        this.productsFromServer = getData;
        console.log(this.productsFromServer);
      }
    )
  }

}
