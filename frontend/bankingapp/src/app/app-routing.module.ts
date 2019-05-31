import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
/* import { HomeComponent } from './components/adminView/home/home.component'; */
import { NewCustomerComponent } from './components/adminView/new-customer/new-customer.component';
import { ViewCustomersComponent } from './components/adminView/view-customers/view-customers.component';
import { LoginComponent } from './components/adminView/login/login.component';
import { TransferComponent } from './components/adminView/transfer/transfer.component';
import { AdminHomeComponent } from './components/adminView/admin-home/admin-home.component';
import { UserLoginComponent } from './components/userView/user-login/user-login.component';
import { UserHomeComponent } from './components/userView/user-home/user-home.component';
import { UserTransactionComponent } from './components/userView/user-transaction/user-transaction.component';
import { AddAccountComponent } from './components/adminView/add-account/add-account.component';
import { TransactionDetailsComponent } from './components/userView/transaction-details/transaction-details.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProfileComponent } from './components/userView/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/landingpage',
        pathMatch: 'full'
    },
    {
        path: 'landingpage',
        component: LandingpageComponent
    },
    {
        path: 'admin/home',
        component: AdminHomeComponent
    },
    {
        path: 'admin/addCustomer',
        component: NewCustomerComponent
    },
    {
        path: 'admin/addAccount',
        component: AddAccountComponent
    },
    {
        path: 'admin/allCustomers',
        component: ViewCustomersComponent
    },
    {
        path: 'admin/login',
        component: LoginComponent
    },
    {
        path: 'admin/transfer',
        component: TransferComponent
    },
    {
        path: 'user/login',
        component: UserLoginComponent
    },
    {
        path: 'user/home',
        component: UserHomeComponent
    },
    {
        path: 'user/transaction',
        component: UserTransactionComponent
    },
    {
        path: 'user/profile',
        component: ProfileComponent
    },
    {
        path: 'user/transactions',
        component: TransactionDetailsComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }