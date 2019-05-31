import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Customer } from 'src/app/models/Customer';
import { RestService } from 'src/app/services/rest.service';
import { UrlSerializer, Router } from '@angular/router';
import { BehaviourService } from 'src/app/services/behaviour.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  loggedInUser: Customer = new Customer;


  constructor(private local: LocalStorageService, private location: Location, private rest: RestService, private behaviourService: BehaviourService, private router: Router) { }


  ngOnInit() {
  }

  userLogin(id: number, password: string) {
    var user: Customer;
    this.rest.getCustomer(id).subscribe(v => {
      user = v;
      if(user.password.valueOf() == password.valueOf()){
      this.loggedInUser = user;
      this.local.setCustomer('loggedInUser', user);
      this.behaviourService.emitValue(this.loggedInUser);
      this.router.navigate(['/user/home']);

    } else {
      alert('Wrong password.');
    }
    });
    

    
  }
}
