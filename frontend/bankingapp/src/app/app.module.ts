import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NewCustomerComponent } from './components/adminView/new-customer/new-customer.component';
import { ViewCustomersComponent } from './components/adminView/view-customers/view-customers.component';
import { LoginComponent } from './components/adminView/login/login.component';
import { TransferComponent } from './components/adminView/transfer/transfer.component';
import { UserLoginComponent } from './components/userView/user-login/user-login.component';
import { AdminHomeComponent } from './components/adminView/admin-home/admin-home.component';
import { UserHomeComponent } from './components/userView/user-home/user-home.component';

import { UserHandlerComponent } from './components/userView/user-handler/user-handler.component';
import { UserTransactionComponent } from './components/userView/user-transaction/user-transaction.component';
import { ValidationComponent } from './components/userView/validation/validation.component';
import { AdminValidationComponent } from './components/adminView/admin-validation/admin-validation.component';
import { AddAccountComponent } from './components/adminView/add-account/add-account.component';
import { TransactionDetailsComponent } from './components/userView/transaction-details/transaction-details.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProfileComponent } from './components/userView/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NewCustomerComponent,
    ViewCustomersComponent,
    LoginComponent,
    TransferComponent,
    UserLoginComponent,
    AdminHomeComponent,
    UserHomeComponent,
 
    UserHandlerComponent,
    UserTransactionComponent,
    ValidationComponent,
    AdminValidationComponent,
    AddAccountComponent,
    TransactionDetailsComponent,
    LandingpageComponent,
    ProfileComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
