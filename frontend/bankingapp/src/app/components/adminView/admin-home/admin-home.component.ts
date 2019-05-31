import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  admin: string;
  constructor(private local: LocalStorageService, private router :Router) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  logout() {
    this.local.clearAdmin();
    this.router.navigate(['/landingpage']);
  }

}
