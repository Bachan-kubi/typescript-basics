{// spread operator

const arr1: number[] = [1, 2, 3];
const arr2: number[]= [5,7,9];
arr1.push(...arr2);

const lognArr =(...arr:number[])=>{
    arr.forEach((a)=> console.log(a))
}

lognArr(1,2,3);





}
