import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddagencyComponent } from './admin/addagency/addagency.component';
import { AdminapproveComponent } from './admin/adminapprove/adminapprove.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { BuyerSearchComponent } from './buyer/buyer-search/buyer-search.component';
import { BuyernavComponent } from './buyer/buyernav/buyernav.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { LandingComponent } from './main/landing/landing.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { SellernavComponent } from './seller/sellernav/sellernav.component';
import { AddhouseComponent } from './seller/addhouse/addhouse.component';
import { AddmicroComponent } from './admin/addmicro/addmicro.component';
import { AddmicroFormComponent } from './admin/addmicro-form/addmicro-form.component';

const routes: Routes = [
  {
    path: "", redirectTo: "landing", pathMatch: 'full'
  },
  {
    path: "landing", component: LandingComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "buyer", component: BuyernavComponent,
    children: [
      {
        path: "buyer-search", component: BuyerSearchComponent
      },
      {
        path: "", redirectTo: "buyer-search", pathMatch: 'full'
      }
    ]
  },
  {
    path: "admin", component: AdminnavComponent,
    children: [
      {
        path: "approve", component: AdminapproveComponent
      },
      {
        path: "", redirectTo: "approve", pathMatch: 'full'
      },
      {
        path: "agencies", component: AddagencyComponent
      },
      {
        path: "userlist", component: UserlistComponent
      },
      {
        path: "edituser", component: EdituserComponent
      },
      {
        path : "micro", component:AddmicroComponent
      },
      {
        path :"microform" , component :AddmicroFormComponent
      }
    ]
  },
  {
    path : 'seller', component:SellernavComponent,
    children : [
      {
        path : 'addhouse' , component :AddhouseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
