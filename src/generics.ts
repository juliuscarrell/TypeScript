// 1. Generics and Arrays

let julesarray: Array<string> = []; // says that the object must of Type Array which must contain strings

julesarray = [1, 2]; // not happy if you try and assign an array with numbers inside

julesarray = ["jules"]; // HAppy now you put in some strings.

// ALERT : This is similar to the typescriopt way of setting Array contents

let alicearray: string[];

alicearray = [1, 2]; // not happy if you try and assign an array with numbers inside

alicearray = ["jules"]; // HAppy now you put in some strings.

//BUT Generics are used outside of Arrays!

//2. Promises

/* Generics are a key part of Promises. A Promise is a Type, and each Promise has a resolve method which yields types.
 Which uses Generics to ensure type safety. 
 */

//3. Building your own generic functions

// a. One way to use Generics, is to come up with a way to say that you don't mind the typoe of obehjct that get used a Params
// Below show how the merge uses <T,U> to say "i don't what structure of the object get s used, just that it's preferablke that they are both different"

function merge<T, U>(objA: T, objB: U) {
  let minegood: T = objA;

  return Object.assign(objA, objB);
}

const alwaysnum = merge({ name: "Jules" }, { age: 28 });

// b. You can enahnce the previous example by forcing that the object that are passed in definitely  are objects, rather than literal type

function mergetwo<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const alwaysnumtwo = mergetwo({ name: "Jules" }, 28); // BAD - second param not an object
const alwaysnumthree = merge({ name: "Jules" }, { age: 28 }); // GOOD! :)- second param IS an object

//c. Using the keyof Generic constraint

function keyoftestmethod<T, U extends keyof T>(param1: T, prop: U) {
  return param1[prop];
}

// 4. Building you own Generic classes

// a. Using Generics and classes

class Ledger<T> {
  type: T;
  constructor(type: T) {
    this.type = type;
    console.log(typeof type);
  }
}

const stringledgerright = new Ledger<string>("hi");

const stringledgerwrong1 = new Ledger<string>(8);

const stringledgerwrong1 = new Ledger<number>("hi");

//b. Using constraints

class MyStorage<T extends string> {
  type: T;
  constructor(type: T) {
    this.type = type;
    console.log(typeof type);
  }
}

const storageright = new MyStorage<string>("hi");

const storagewrong = new MyStorage<number>(8);

// 5. Generic Utility Types

interface OptionalProps {
  name: string;
  age: number;
  job: boolean;
}

const theobj: Partial<OptionalProps> = { name: "Jules" };

function mymerge<X>(word: X) {
  const name: X = word;

  return name;
}

const mergeinvoke = mymerge<string>("hi");
