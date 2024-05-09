"use strict";
{
    // access modifier
    class BankAccount {
        constructor(name, accNo, balance) {
            this.name = name,
                this.accNo = accNo,
                this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
            return this._balance;
        }
        getBalance() {
            return this._balance;
        }
    }
    class Student extends BankAccount {
        test() {
            this._balance;
        }
    }
    const gorib = new BankAccount('kk', 123, 987);
    gorib.addDeposit(20);
    console.log(gorib.getBalance());
}
