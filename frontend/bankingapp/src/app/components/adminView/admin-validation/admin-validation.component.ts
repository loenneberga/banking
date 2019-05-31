import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-validation',
  templateUrl: './admin-validation.component.html',
  styleUrls: ['./admin-validation.component.scss']
})
export class AdminValidationComponent implements OnInit {

  admin: string;

  constructor(private local: LocalStorageService) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

}
