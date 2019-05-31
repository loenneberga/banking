import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { UpdateAccountRQ } from '../models/UpdateAccountRQ';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  newCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL + '/customer', customer);
  }

  allCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL + '/customers');
  }

  transfer(request: UpdateAccountRQ): Observable<UpdateAccountRQ> {
    return this.http.put<UpdateAccountRQ>(this.URL + '/update', request);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.URL + '/customer/' + id);
  }

  addAccount(id: number, accountType: string): Observable<Customer> {
    return this.http.post<Customer>(this.URL + '/addAccountFor/' + id + '/' + accountType, {});
  }

  getAccount(iban: string): Observable<Account> {
    return this.http.get<Account>(this.URL + '/account/' + iban);
  }
}
