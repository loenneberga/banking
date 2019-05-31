import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {
  admin: string;
  customerList: Customer[]=[];

  constructor(private rest: RestService, private local: LocalStorageService, private router:Router) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
    if (this.admin) {
      this.rest.allCustomers().subscribe(v => this.customerList = v);
      }
  }

  logout() {
    this.local.clearAdmin();
    this.router.navigate(['/landingpage']);
  }
}
