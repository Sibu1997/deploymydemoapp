import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginadminService {

   
  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin: Admin):Observable<object>{
    console.log(admin)
    return this.httpClient.post("http://localhost:8081/admin/login",admin);
  }
 

}
