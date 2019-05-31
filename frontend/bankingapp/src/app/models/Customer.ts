import { Address } from './Address';
import { Account } from './Account'

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    accountList: Account[];
    password: string;
}