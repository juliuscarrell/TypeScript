"use strict";
// Normal Typing
function combines1(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    return result;
}
const resultNums = combines1(20, 31);
const resultStrings = combines1("twenty", "thirty-one"); // Not Allowed as we know
//Using Union Types
function combines2(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    return result;
}
function combines3(num1, num2) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else
        result = num1.toString() + num2.toString();
    console.log(result);
    return result;
}
// Using Literal Types
function combines4(num1, num2, outputType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else
        result = num1.toString() + num2.toString();
    console.log(result);
    return result;
}
// const newNum = combines4(5, 6, "Jules");
const newNum2 = combines4(5, 6, "as-num");
function newCombine(item) {
    console.log(item);
}
newCombine(5); //Able to invoke
newCombine("Hello"); //Able to invoke
newCombine("Goodbye"); // NOT able to invoke
