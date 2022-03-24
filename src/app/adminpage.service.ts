import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminpageService {

  constructor(private httpClient: HttpClient) { }
 
  getUser() : Observable<object>{
    return this.httpClient.get("http://localhost:8081/user/all");
  }
  
  deleteUser(username:any) : Observable<object>{
    return this.httpClient.delete("http://localhost:8081/user/delete?username="+username);
  }

  updateUserStatus(userName:any, status:any) : Observable<object>{
    var data = {
      "userName":userName,
      "status":status
    };
    return this.httpClient.post("http://localhost:8081/user/update",data);
  }
}
