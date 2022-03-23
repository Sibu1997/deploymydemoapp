import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { DashobrdComponent } from './dashobrd/dashobrd.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: 'login' , component: UserLoginComponent},
  { path: 'register' , component: RegisterUserComponent},
  { path: 'products' , component: ProductsComponent},
  { path: 'products/buyproduct/:id' , component: BuyproductComponent},
  { path: 'index' , component: IndexComponent},
  { path: 'dashbord' , component: DashobrdComponent},
  { path: 'adminpage' , component: AdminpageComponent},
  { path: 'terms' , component: TermsconditionComponent},
  { path: 'adminlogin' , component: AdminloginComponent},
  { path: 'forgot' , component: ForgotpasswordComponent},
  { path: '', redirectTo: '/index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, RegisterUserComponent,DashobrdComponent,IndexComponent,BuyproductComponent,ProductsComponent,ProductsComponent,AdminpageComponent,AdminloginComponent,TermsconditionComponent,ForgotpasswordComponent]
