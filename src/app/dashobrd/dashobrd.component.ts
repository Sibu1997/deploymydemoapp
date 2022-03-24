import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
@Component({
  selector: 'app-dashobrd',
  templateUrl: './dashobrd.component.html',
  styleUrls: ['./dashobrd.component.css']
})
export class DashobrdComponent implements OnInit {
  user:User =new User();
  users:any;
  cardNumber:any="";
  name:any="";
  vaildTill:any="";
  cardType:any="";
  transactionList:any=[];
  totalCredit:any="";
  creditUsed:any="";
  remainingCredit:any="";
  amount:any="";
  productName:any="";
  paid:any="";
  balance:any=""
  constructor(private registerservice: RegisterService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    var username = localStorage.getItem("logged-username");
    this.registerservice.getDashboardData(username).subscribe(data=>{
      this.cardNumber=data['data']['cardNumber'];      
      this.name=data['data']['name'];
      this.vaildTill=data['data']['vaildTill'];
      this.cardType=data['data']['cardType'];
      this.totalCredit=data['data']['totalCredit'];
      this.creditUsed=data['data']['creditUsed'];
      this.remainingCredit=data['data']['remainingCredit'];
      this.transactionList = data['data']['transactionList'];
      this.amount = data['data']['amount'];
      this.productName = data['data']['productName'];
      this.paid = data['data']['paid'];
      this.balance = data['data']['balance'];
      
   }, error=>{
    alert(error['error']['message']);
  });
  }
}
