export class Transaction {
    id: number;
    payer: string;
    payee: string;
    date: Date;
    amount: number;
    payerIban: string;
    payeeIban: string;
}