"use strict";
// 1. Generics and Arrays
let julesarray = []; // says that the object must of Type Array which must contain strings
julesarray = [1, 2]; // not happy if you try and assign an array with numbers inside
julesarray = ["jules"]; // HAppy now you put in some strings.
// ALERT : This is similar to the typescriopt way of setting Array contents
let alicearray;
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
function merge(objA, objB) {
    let minegood = objA;
    return Object.assign(objA, objB);
}
const alwaysnum = merge({ name: "Jules" }, { age: 28 });
// b. You can enahnce the previous example by forcing that the object that are passed in definitely  are objects, rather than literal type
function mergetwo(objA, objB) {
    return Object.assign(objA, objB);
}
const alwaysnumtwo = mergetwo({ name: "Jules" }, 28); // BAD - second param not an object
const alwaysnumthree = merge({ name: "Jules" }, { age: 28 }); // GOOD! :)- second param IS an object
//c. Using the keyof Generic constraint
function keyoftestmethod(param1, prop) {
    return param1[prop];
}
// 4. Building you own Generic classes
// a. Using Generics and classes
class Ledger {
    constructor(type) {
        this.type = type;
        console.log(typeof type);
    }
}
const stringledgerright = new Ledger("hi");
const stringledgerwrong1 = new Ledger(8);
const stringledgerwrong1 = new Ledger("hi");
//b. Using constraints
class MyStorage {
    constructor(type) {
        this.type = type;
        console.log(typeof type);
    }
}
const storageright = new MyStorage("hi");
const storagewrong = new MyStorage(8);
const theobj = { name: "Jules" };
function mymerge(word) {
    const name = word;
    return name;
}
const mergeinvoke = mymerge("hi");
