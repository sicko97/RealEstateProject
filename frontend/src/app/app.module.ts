import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './main/landing/landing.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BuyernavComponent } from './buyer/buyernav/buyernav.component';
import { BuyerSearchComponent } from './buyer/buyer-search/buyer-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { LoginComponent } from './main/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './main/register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AdminapproveComponent } from './admin/adminapprove/adminapprove.component';
import { AddagencyComponent } from './admin/addagency/addagency.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { SellernavComponent } from './seller/sellernav/sellernav.component';
import { SellerHousesComponent } from './seller/seller-houses/seller-houses.component';
import { AddhouseComponent } from './seller/addhouse/addhouse.component';
import { SellerMydataComponent } from './seller/seller-mydata/seller-mydata.component';
import { AddmicroComponent } from './admin/addmicro/addmicro.component';
import { AddmicroFormComponent } from './admin/addmicro-form/addmicro-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BuyerAllComponent } from './buyer/buyer-all/buyer-all.component';
import { AddjsonComponent } from './seller/addjson/addjson.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BuyernavComponent,
    BuyerSearchComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminnavComponent,
    AdminapproveComponent,
    AddagencyComponent,
    UserlistComponent,
    EdituserComponent,
    SellernavComponent,
    SellerHousesComponent,
    AddhouseComponent,
    SellerMydataComponent,
    AddmicroComponent,
    AddmicroFormComponent,
    BuyerAllComponent,
    AddjsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
