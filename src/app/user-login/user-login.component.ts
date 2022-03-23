import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User =new User();
public loginForm!: FormGroup
  constructor(private loginuserservice: LoginuserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        userName:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }

  userLogin(){
    //console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("login Successfully")
      this.loginForm.reset();
      this.router.navigate(['dashbord'])
    },error=>{
      alert(error['error']['message']);
    });
  }
  }


