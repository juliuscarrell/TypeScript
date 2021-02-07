"use strict";
// unknown type
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
let variable;
variable = "bye";
variable = 9;
let newvariable;
// newvariable = variable ; // Not allowed since newvariable cannot guarentee to be a string
let anyvariable;
newvariable = anyvariable; // ok since Typescript gives the any (normaly implicit) the chance to become  string at some point
function generateError() {
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
let restparam = (...numbers) => {};
restparam(5, 6, 7, 8);
let restparatuple = (...numbers) => {};
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
const { age, height } = objpacked,
  unpacked = __rest(objpacked, ["age", "height"]); // into variables with same name as propoerties
const { age: aliasage, height: aliaheight } = objpacked; // into variables with same name as propoerties

class Dragon {
  constructor(name) {
    this.name = name;
  }
}
let myobject = {
  name: "Jules",
  age: 55
};
let myDraggy = new Dragon("Jules the dragon");
console.log(myDraggy.name);
