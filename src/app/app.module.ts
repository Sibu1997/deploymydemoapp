import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashobrdComponent } from './dashobrd/dashobrd.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashobrdComponent,
    IndexComponent,
    ProductsComponent,
    BuyproductComponent,
    AdminpageComponent,
    AdminloginComponent,
    TermsconditionComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
