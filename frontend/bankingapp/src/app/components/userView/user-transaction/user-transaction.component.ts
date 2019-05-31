import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Customer } from 'src/app/models/Customer';
import { RestService } from 'src/app/services/rest.service';
import { UpdateAccountRQ } from 'src/app/models/UpdateAccountRQ';
import { Account } from 'src/app/models/Account';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.component.html',
  styleUrls: ['./user-transaction.component.scss']
})
export class UserTransactionComponent implements OnInit {

  constructor(private local: LocalStorageService, private rest: RestService, private router : Router, private location: Location) { }

  loggedInUser: Customer;

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');
  }

  transfer(iban1:string, iban2: string, amount: number) {
    const request = new UpdateAccountRQ(iban1, iban2, amount);
    this.rest.transfer(request).subscribe();
    alert('Transaction successful!')
    window.location.reload();
  }

  logout() {
    this.local.clearCustomer();
    this.router.navigate(['/landingpage']);
  }

}
