import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class BehaviourService {


  mySubject = new BehaviorSubject(new Customer());

  constructor() { }

  emitValue(value: Customer) {
    this.mySubject.next(value);
  }

  getSubscription$() {
    return this.mySubject;
  }
}
