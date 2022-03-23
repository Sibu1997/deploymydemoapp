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
    alert("sendsOtp called"+this.user.userName);
    console.log(this.user)
    this.forgotservice.sendOtp(this.user).subscribe(data=>{
      alert("login Successfully")
      // this.sendOtp.reset();
      //this.router.navigate(['changep'])
      this.otpScreen=false;
    },error=>alert("sorry Please enter correct username"));
  }

  verifyOtp(){
    this.otpScreen=false;
    console.log(this.user)
    this.forgotservice.validateOtp(this.user).subscribe(data=>{
      alert("login Successfully")
      // this.sendOtp.reset();
      //this.router.navigate(['changep'])
      this.otpScreen=false;
    },error=>alert("sorry Please enter correct username"));
    console.log("Arjun jai");
  }

 passwordUpdate(){
  // this.username= document.getElementById("username").nodeValue;
    this.otpScreen=false;
    console.log(this.user)
    this.forgotservice.updatePassword(this.user).subscribe(data=>{
      alert("updated Successfully")
      // this.sendOtp.reset();
      //this.router.navigate(['changep'])
      this.otpScreen=false;
    },error=>alert("sorry Please enter correct username"));
    console.log("hideOtpScreen Arjun jai");
  }
  
}
