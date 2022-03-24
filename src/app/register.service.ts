import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   baseUrl="http://localhost:8081/user/register";
  constructor(private httpClient: HttpClient) { }


  registerUser(user: User): Observable<Object> {
     console.log(user);
     return this.httpClient.post(`${this.baseUrl}`,user);
  }

  getProducts(): Observable<Object> {
      return this.httpClient.get("http://localhost:8081/utility/get/product-list");
  }

  getProduct(productId:any): Observable<Object> {
    return this.httpClient.get("http://localhost:8081/utility/get/product?productId="+productId);
  }
 
  getDashboardData(username : any): Observable<Object> {
    return this.httpClient.get("http://localhost:8081/utility/dashboard?username="+username);
  }

  payNow(userName: any, productId:any, emiMonth:any): Observable<Object> {
    var data = {
      "productId":productId,
      "userName":userName,
      "emiMonthPeriod": emiMonth
    };
    console.log(data);
    return this.httpClient.post("http://localhost:8081/utility/pay-now",data);
  }
}
