{
    // access modifier
    class BankAccount{
        public name: string;
        public readonly accNo: number;
        // private _balance: number;
        protected _balance: number;

        constructor(name:string, accNo: number, balance: number){
            this.name = name,
            this.accNo = accNo,
            this._balance = balance
        }
        addDeposit(amount: number) {
            this._balance = this._balance + amount;
            return this._balance;
        }
        getBalance(){
            return this._balance;
        }
    }

    class Student extends BankAccount{
        test(){
            this._balance;
        }
    }

        const gorib = new BankAccount('kk', 123, 987);
        gorib.addDeposit(20);
        console.log(gorib.getBalance());
















}