{// function 
// noraml function
function add(num:number, num1: number){
    return num+num1;
}

add(2,2);

const addMore = (num: number, n:number): number=>num+n;
addMore(2, 2);

const poorUser={
    name: 'kubi',
    balance: 0,
    addBalance(balance: number): number{
        return balance+ this.balance;
    }
}

const arr: number[]= [1,2,3];
arr.push(10);

const newArr = arr.map((elem:number):number=>elem+elem);


}