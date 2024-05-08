{

// conditional type

// type a1 = null;

type a1 = number;
type a2 = undefined;

type x = a1 extends null? true : false ; // conditional type.

type y = a1 extends number? true : a2 extends undefined ? undefined : any;


type Kubi = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
}

// type CheckedKubi<T> = T extends "bike"| "car"| "ship"? true: false;
// another one // key of
type CheckedKubi<T> = T extends keyof Kubi? true: false;

type HasBike = CheckedKubi<"bike">;
type HasPlnae = CheckedKubi<"plane">;
































}