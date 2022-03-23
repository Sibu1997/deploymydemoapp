import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ForgotService } from '../forgot.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  user:User =new User();
  // username:any ="";
  constructor(private forgotservice: ForgotService, private router: Router) { }
  otpScreen: boolean = true;

  ngOnInit(): void {
    this.otpScreen=true;
  }
  public sendOtp():any{
    // this.username= document.getElementById("username").nodeValue;
    this.otpScreen=true;
    this.forgotservice.sendOtp(this.user).subscribe(data=>{
      //alert("login Successfully")
      // this.sendOtp.reset();
      //this.router.navigate(['changep'])
      alert(data['data']);
      this.otpScreen=true;
    },error=>{
      this.otpScreen=true;
      console.log(error);
      alert(error['error']['message']);
    });
  }

  verifyOtp(){
    this.forgotservice.validateOtp(this.user).subscribe(data=>{
      this.otpScreen=false;
      alert(data['data']);
    },error=>{
      this.otpScreen=true;
      alert(error['error']['message']);
    });
  }

 passwordUpdate(){
  if(this.user.password!=this.user.cpassword){
    alert("Password and Confirm Password is matching. Please Enter correct Password");
    return;
  }
    this.forgotservice.updatePassword(this.user).subscribe(data=>{
      alert(data['data']);
      this.router.navigate(['login'])
    },error=>{
      alert(error['error']['message']);
    });
  }
  
}
