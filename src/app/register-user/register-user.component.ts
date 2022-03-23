import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User =new User();
  public exform: FormGroup;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'bank' : new FormControl(null, Validators.required),
      'cardtype' : new FormControl(null, Validators.required),
      'userName' : new FormControl(null,[ Validators.required,
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      'address' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]),
          'ifsc' : new FormControl(null, Validators.required),
          'dob' : new FormControl(null, Validators.required),
          'password' : new FormControl(null, Validators.required),
          'cpassword' : new FormControl(null, Validators.required),
          'accountNo' : new FormControl(null, Validators.required)
    });
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
     alert("Successfully User is register?")
     this.exform.reset();
     this.router.navigate(['login'])
    },error=>alert("Sorry User not register"));
  }
  get name() {
    return this.exform.get('name');
  }
  get address() {
    return this.exform.get('address');
  }
  get userName() {
    return this.exform.get('userName');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get accountNo() {
    return this.exform.get('accountNo');
  }
  get password() {
    return this.exform.get('password');
  }
  get cpassword() {
    return this.exform.get('cpassword');
  }
  get ifsc() {
    return this.exform.get('ifsc');
  }
  get dob() {
    return this.exform.get('dob');
  }
  get cardtype() {
    return this.exform.get('cardtype');
  }
  get bank() {
    return this.exform.get('bank');
  }


}
