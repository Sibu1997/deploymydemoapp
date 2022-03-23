import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginadminService } from '../loginadmin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:Admin =new Admin();
  constructor(private  loginadminservice: LoginadminService, private router: Router) { }

  ngOnInit(): void {
  }
  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
      alert("login Successfully")
      
      this.router.navigate(['adminpage'])
    },error=>alert("sorry Please enter correct AdminName and Password"));
  }

}
