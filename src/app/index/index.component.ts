import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private registerService: RegisterService) { }
  products:any=[];

  ngOnInit(): void {
    localStorage.setItem("logged-username", undefined);
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
