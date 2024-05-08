{
// Ternary Operator|| optional chaining || nullish coulescing

let age:number = 15;
if(age<15){
    console.log('novice!');
}else{
    console.log('adult!');
}

const newAge = age<25 ? "GOOD": "BAD";
console.log(newAge);

// nullshit coelescing opertor - decision based on null or undefined value;

let isAuthenticated = null;

const result = isAuthenticated ?? 'Guest';


type User={
    name: string;
    age: number;
    address: {
        parmanentAddress: string;
        presentAddress: string;
        contact: number;
    }
}
const user: User={
    name: 'kubi',
    age: 30,
    address: {
        parmanentAddress: "fokir",
        presentAddress: "jakir",
        contact: 123
    }
}

const newData = user?.address?.presentAddress ?? "nai";
console.log(newData);





















}