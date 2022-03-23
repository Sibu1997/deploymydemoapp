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
}
