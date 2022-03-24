import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  emiAmount:any="";
  productCost:any="12000";
  id="";
  productId:any="";
  productName:any="";
  productdecs:any="";
  emiMonths:any="";
 

  
  constructor(private _Activatedroute:ActivatedRoute,private registerService: RegisterService, private router:Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.getProductDetail();    
  }

  getProductDetail(){
    this.registerService.getProduct(this.id).subscribe(data=>{
      this.productId=data['data']['id'];
      this.productName=data['data']['productName'];
      this.productdecs=data['data']['productDescription'];
      this.productCost=data['data']['productPrice'];
      this.emiAmount=this.productCost/3;
   } ,error=>{
    alert(error['error']['message']);
   });
  }

  calculateEmi(obj):any{
    //console.log(localStorage.getItem("logged-username"));
    //console.log(obj.value);
    //console.log(this.id);
    this.emiMonths = obj.value;
    this.emiAmount=this.productCost/obj.value;
  }

  paynow():any{
    var username = localStorage.getItem("logged-username");
    this.registerService.payNow(username,this.productId,this.emiMonths).subscribe(data=>{
      alert(data['data']);
      this.router.navigate(['dashboard'])
   } ,error=>{
    alert(error['error']['message']);
   });
  }
}
