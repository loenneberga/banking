export class UpdateAccountRQ {
    iban: string;
    iban2: string;
    amount: number;

    constructor(iban: string, iban2: string, amount: number) {
        this.iban = iban;
        this.iban2 = iban2;
        this.amount = amount;

    }
}