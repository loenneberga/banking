import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { UpdateAccountRQ } from 'src/app/models/UpdateAccountRQ';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  admin: string;
  constructor(private rest: RestService, private local: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  transfer(iban1: string, iban2: string, amount: number) {
    const request = new UpdateAccountRQ(iban1, iban2, amount);
    this.rest.transfer(request).subscribe();
  }

  logout() {
    this.local.clearAdmin();
    this.router.navigate(['/landingpage']);
  }

}
