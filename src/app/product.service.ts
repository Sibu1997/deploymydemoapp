import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  // private httpClient: HttpClient
  // getProductList():Observable<object>{
  //   var productList ={
  //     productList:[
  //       {
  //         "productName":"Dell Laptop",
  //         "productDesc":"16 Inch Dell Laptop",
  //         "cost": 35000,
  //         "imgUrl":""
  //       },
  //       {
  //         "productName":"HP Laptop",
  //         "productDesc":"16 Inch Dell Laptop",
  //         "cost": 45000,
  //         "imgUrl":""
  //       },
  //       {
  //         "productName":"Samsung Laptop",
  //         "productDesc":"16 Inch Dell Laptop",
  //         "cost": 65000,
  //         "imgUrl":""
  //       }
  //     ]
  //   }
  //  // console.log(user)
  //   //return this.httpClient.post("http://localhost:8081/user/login",user);
  // }
}
