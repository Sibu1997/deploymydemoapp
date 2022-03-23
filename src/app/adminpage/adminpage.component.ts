import { Component, OnInit } from '@angular/core';
import { AdminpageService } from '../adminpage.service';
import { User } from '../user';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  users: any;
  user:User =new User();
  constructor(private adminpageservice: AdminpageService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.adminpageservice.getUser().subscribe(data=>{
      this.users=data['data'];
   } ,error=>alert(" userdetails are not available"));
   
  }
}
