import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private httpClient: HttpClient) { }

  sendOtp(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.get("http://localhost:8081/user/sendOtp?username="+user.userName);
  }
  updatePassword(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8081/user/update-password?password=", +user.password);
  }
  
  validateOtp(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8081/user/validateOtp?username", +user.userName);
  }
  
  
}
