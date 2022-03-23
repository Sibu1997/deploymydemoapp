import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

   
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8081/user/login",user);
  }
}
