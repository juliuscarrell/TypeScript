// unknown type

let variable: unknown;
variable = "bye";
variable = 9;

let newvariable: string;

// newvariable = variable ; // Not allowed since newvariable cannot guarentee to be a string

let anyvariable: any;

newvariable = anyvariable; // ok since Typescript gives the any (normaly implicit) the chance to become  string at some point

function generateError(): never {
  throw console.error();
}

// generateError();

// let obj = {
//   name:"jules",
//   age:27
// }

// console.log(obj)

// let newobj = ...obj

//Spread Operator

let myarray = ["hello", "goodbye"];

console.log("myarray" + myarray);

let newarray = [...myarray];

newarray.push("Good afternoon");

console.log("myarray" + newarray);

console.log("myarray2" + myarray);

//Rest Parameters

let restparam = (...numbers: any[]) => {};

restparam(5, 6, 7, 8);

let restparatuple = (...numbers: [number, number, number]) => {};

restparatuple(5, 6, 7, 8);

//Unpacking Arrays

const packedarray = ["hi", "bye", "now"];

console.log(packedarray);

// const a = packedarray[1];
// const b = packedarray[2];

const packedarraynew = ["hi", "bye", "now"];

const [a, ...remaining] = packedarraynew;

console.log(a, ...remaining);

const objpacked = {
  name: "Jules",
  age: 27,
  height: 192,
  haircoulour: "brownish"
};

let myname = objpacked.name;
const myage = objpacked.age;

const { age, height, ...unpacked } = objpacked; // into variables with same name as propoerties

const { age: aliasage, height: aliaheight } = objpacked; // into variables with same name as propoerties

class Dragon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  breathFire (num: number) {

    console.log (num)
  }
}

let myDraggy = new Dragon("Jules the dragon");

console.log(myDraggy.name);

let myobject = {
  name: "Jules",
  age: 55
  
};
