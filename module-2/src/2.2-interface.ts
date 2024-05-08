{type user1 ={
    name: string;
    age: number;
}
interface user2 {
    name: string;
    age: number
}

type userWithRole = user1 &{role: string};

interface userWithInterface extends user2 {
    role: string;
}
const user2:userWithInterface = {
    name: "bachan",
    age: 25,
    role: 'Manager' 
}
// array 

type arr = number[];
interface ar{
    [index: number]: number
}

const rool:ar = [1,2,3];






}