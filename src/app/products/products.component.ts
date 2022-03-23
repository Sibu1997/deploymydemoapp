import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any=[];
  constructor(private registerService: RegisterService) { }
  user :User =new User();
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.registerService.getProducts().subscribe({})

    this.registerService.getProducts().subscribe(data=>{
      this.products=data['data'];
      console.log(this.products);
   } ,error=>{
    alert(error['error']['message']);
   });
  }
}
