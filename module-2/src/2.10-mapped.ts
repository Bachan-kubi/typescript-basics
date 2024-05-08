{
  // mapped type
  // how to create type with map js method

  const allNumber: number[] = [1, 2, 3];

  const newNumber: string[] = allNumber.map((number) => number.toString());

  // use loop creating types

  type areaString = {
    height: string;
    length: string;
  };

  type newAeraString = {
    // [key in "height" | "width" | "length"]: string;
    [key in keyof areaString]: string;
  };

// create type with look up type 
  type loopUp = areaString['length'];

// dynamic 

// type PersonNames= {
//     name: string;
//     address: string;
//     age: string;
// }
type PersonNames<T> = {
    [key in keyof T] : T[key];
}
const newPerson: PersonNames<{name: string, address: string, age: number}> = {
    name: 'kk',
address: 'jj', age: 25}
// const newPerson<T> = {
//     name: 'kubi',
//     address: 'ami',
//     age: 20
// }









}
