"use strict";
{
    {
        // access modifier
        class BankAccount {
            constructor(name, accNo, balance) {
                this.name = name,
                    this.accNo = accNo,
                    this._balance = balance;
            }
            // addDeposit(amount: number) {
            //     this._balance = this._balance + amount;
            //     return this._balance;
            // }
            // getBalance(){
            //     return this._balance;
            // }
            // getter 
            get balance() {
                return this._balance;
            }
            // setter
            set deposit(amount) {
                this._balance = this._balance + amount;
            }
        }
        class Student extends BankAccount {
            test() {
                this._balance;
            }
        }
        const gorib = new BankAccount('kk', 123, 987);
        gorib.balance;
        gorib.deposit = 20;
    }
}
