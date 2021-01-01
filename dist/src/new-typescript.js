"use strict";
const input1 = 3;
const input2 = 4;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(input1, input2));
class Person {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
}
const me = new Person("Jules");
console.log("Jules2");
