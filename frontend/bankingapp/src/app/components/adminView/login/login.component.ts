import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location, private local: LocalStorageService, private router: Router) { }

  admin: string;

  ngOnInit() {
  }

  adminLogin(name: string, password: string): void {
    if(name == 'admin' && password == 'admin') {
      this.local.setAdmin();
      this.router.navigate(['/admin/home']);
    } else {
      alert('Wrong username or password');
    }
  }
}
