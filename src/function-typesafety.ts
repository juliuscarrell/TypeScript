function returnString(st1: string, st2: number) {
  return st1;
}

function defineReturnString(st1: string, st2: number): string {
  return st1; // All Good
}

function defineReturnNumber(st1: string, st2: number): number {
  return st1; //Not allowed
}

function returnVoid(num1: number, num2: number) {}

function returnVoid2(num1: number, num2: number): void {
  return num1; // Not Allowed
}

//function with 2 number args and returns number

function returnNum(num1: number, num2: number) {
  return num1 + num2;
}

let redirect: (a: number, b: number) => number;

redirect = returnNum; // points variable to the function returnNum

console.log(redirect(1, 2)); // Logs 1+3

//function with 3 number args and returns string

function threeNums(num1: number, num2: number, num3: number): string {
  return "hello";
}

redirect = threeNums;

console.log(redirect(3, 4)); // Logs 1+3

// Callbacks and Typesafety

let funcRef: (int1: number) => number; // Defines what kind of Object/function that funcRef can reference ,
// in this case a function that takes one argument as a number and returns a number

function numfunc(num: number): number {
  // Defines a function - with one arguement that ust be a number and must returna number
  return num + 1;
}

funcRef = numfunc; // assign the newfunction to the reference. this is allowed because the function satisfies the contract of the variable

function callFunc(intA: number, cb: (num: number) => number): string {
  // function that takes a number as an argument and a callback function
  if (typeof intA === "number") {
    let newstring: number;

    newstring = intA + cb(intA); // Add param number to result of callback

    console.log(newstring + "Jules"); // log this

    return "";
  }
}

callFunc(5, funcRef); // invoke function with number and callback with reference to first function

callFunc(3, (num: number) => {
  return 3;
}); // invoke function with number and an anonymous callback which retunrs the number 3
