import { Iban } from './Iban';
import { Transaction } from './Transaction';

export class Account {
    id: number;
    balance: number;
    iban: Iban;
    transactions: Transaction[];
    accountType: string;
}