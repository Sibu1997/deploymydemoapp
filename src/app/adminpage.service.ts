import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminpageService {

  constructor(private httpClient: HttpClient) { }
 
  getUser() : Observable<object>
  {
    return this.httpClient.get("http://localhost:8081/user/al");
  }

}
