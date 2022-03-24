import { Component, OnInit } from '@angular/core';
import { AdminpageService } from '../adminpage.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  users: any=[];
  user:User =new User();
  editScreen:any=false;

  newStatus:any="";
  editedUser:any="";
  constructor(private adminpageservice: AdminpageService,private router: Router) { }

  ngOnInit(): void {
    var loggedUser =localStorage.getItem("logged-username");
    if(loggedUser==undefined){
      this.router.navigate(['index']);
    }
    this.getUser();
  }

  getUser(){
    this.editScreen =false;
    this.adminpageservice.getUser().subscribe(data=>{
      this.users=data['data'];
      console.log(this.users);
   } ,error=>{
    alert(error['error']['message']);
   });   
  }

  deleteUser(user){
    if (confirm("Do you really want to delete "+user['name']+" customer") == true) {
      this.adminpageservice.deleteUser(user['userName']).subscribe(data=>{
        alert(data['data']);
        this.getUser();
     } ,error=>{
      alert(error['error']['message']);
     });  
    }
  }

  editUser(user){
    this.editedUser=user['userName'];
    if(this.editScreen==true){
      this.editScreen=false;
      return;
    }
  this.editScreen=true;
  }

  selectStatus(newStatus){
    this.newStatus=newStatus;
  }
  updateUserStatus(){
    this.adminpageservice.updateUserStatus(this.editedUser,this.newStatus).subscribe(data=>{
      alert(data['data']);
      this.getUser();
   } ,error=>{
    alert(error['error']['message']);
   });  
  }


}
