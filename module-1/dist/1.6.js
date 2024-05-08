"use strict";
{ // function 
    // noraml function
    function add(num, num1) {
        return num + num1;
    }
    add(2, 2);
    const addMore = (num, n) => num + n;
    addMore(2, 2);
    const poorUser = {
        name: 'kubi',
        balance: 0,
        addBalance(balance) {
            return balance + this.balance;
        }
    };
    const arr = [1, 2, 3];
    arr.push(10);
    const newArr = arr.map((elem) => elem + elem);
}
