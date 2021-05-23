// unknown type
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
var variable;
variable = "bye";
variable = 9;
var newvariable;
// newvariable = variable ; // Not allowed since newvariable cannot guarentee to be a string
var anyvariable;
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
var myarray = ["hello", "goodbye"];
console.log(myarray);
var newarray = __spreadArrays(myarray);
newarray.push("Good afternoon");
console.log(newarray);



let animal = (function() {
  species: string;

  function Animal(species) {
    this.species = species;
  }
  return animal;
})();


