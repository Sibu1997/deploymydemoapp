import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User =new User();
  id:any=undefined;
public loginForm!: FormGroup
  constructor(private _Activatedroute:ActivatedRoute,private loginuserservice: LoginuserService, private formBuilder: FormBuilder, private router: Router) { }

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
      localStorage.setItem("logged-username", this.user.userName);
      alert("login Successfully")
      this.loginForm.reset();
      this.id=this._Activatedroute.snapshot.paramMap.get("id");
      if(this.id!=undefined && this.id>0){
        this.router.navigate(['products/buyproduct/'+this.id])
      }else{
        this.router.navigate(['dashboard'])
      }
      
    },error=>{
      alert(error['error']['message']);
    });
  }
  }


