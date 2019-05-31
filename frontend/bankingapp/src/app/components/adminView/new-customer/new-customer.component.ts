import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  admin: string;
  newcustomer : Customer;


  constructor(private rest: RestService, private local: LocalStorageService, private router:Router) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  newCustomer() {
    var emptyCustomer = new Customer();
    this.rest.newCustomer(emptyCustomer).subscribe(v=>this.newcustomer=v);
    }


    logout() {
      this.local.clearAdmin();
      this.router.navigate(['/landingpage']);
    }
}
