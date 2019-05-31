import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  loggedInUser: Customer;
  
  constructor(private local: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');
  }

}
