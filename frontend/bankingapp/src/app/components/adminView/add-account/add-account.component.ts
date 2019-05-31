import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Account } from 'src/app/models/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  admin: string;
  constructor(private rest: RestService, private local: LocalStorageService, private router:Router) { }
  addedSavingCustomerAccount: Customer;
  addedCheckingCustomerAccount: Customer;
  addedRetirementCustomerAccount: Customer;
  addedCustomerAccount: Customer;
  lastItem: number;

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  addCheckingAccount(id: number) {
    this.rest.addAccount(id, 'Checking').subscribe(v => {
      this.addedCustomerAccount = v;
      console.log(this.addedCustomerAccount.accountList)
    });
  }

  addSavingsAccount(id: number) {
    this.rest.addAccount(id, 'Savings').subscribe(v => {
      this.addedCustomerAccount = v;
      console.log(this.addedCustomerAccount.accountList)
    });
  }

  addIndividualRetirementAccount(id: number) {
    this.rest.addAccount(id, 'Individual retirement').subscribe(v => {
      this.addedCustomerAccount = v;
      console.log(this.addedCustomerAccount.accountList)
    });
  }

  logout() {
    this.local.clearAdmin();
    this.router.navigate(['/landingpage']);
  }
}
