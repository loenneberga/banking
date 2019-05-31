import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setCustomer(k: string, v: Customer) {
    localStorage.setItem(k, JSON.stringify(v));
  }

  getCustomer(k: string) {
    return JSON.parse(localStorage.getItem(k));
  }
  
  updateCustomer(k:string, v: Customer) {
    localStorage.removeItem(k);
    localStorage.setItem(k, JSON.stringify(v));
  }

  clearCustomer() {
    localStorage.removeItem('loggedInUser');
  }

  setAdmin() {
    localStorage.setItem('admin', 'admin');
  }

  getAdmin() {
   return localStorage.getItem('admin');
  }

  clearAdmin() {
    localStorage.removeItem('admin');
  }

}
