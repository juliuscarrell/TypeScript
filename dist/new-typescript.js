"use strict";
//1. Advanced Typing
var _a;
// Now if an object implements the type, then its needs to implement ALL the properties.
let Brum = {
    count: 4,
    material: "chrome",
    colour: "red"
};
//2. Type Guards
function choose(choice) {
    console.log(choice.colour); // Only Chassis has colour so TypeScript
    //can't guarentee that the property of the choice object exists
}
function objectGuard(choice) {
    if ("colour" in choice) {
        console.log(choice.colour);
    } // Only Chassis has colour so TypeScript
    //can't guarentee that the property of the choice object exists
}
class Washer {
    constructor() {
        this.colour = "white";
    }
}
class Dryer {
    constructor() {
        this.type = "clothes";
    }
}
function classGuard(choice) {
    if (choice instanceof Washer) {
        console.log(choice.colour);
    } // Only Washer has colour so TypeScript needs the Guard to able to use the colour property
    //can't guarentee that the property of the choice object exists
}
function move(animal) {
    switch (animal.type) {
        case "Bird":
            {
                console.log(animal.flyingSpeed);
            }
            break;
        case "Horse":
            {
                console.log(animal.runningSpeed);
            }
            break;
    }
}
// 4. Casting
const element = document.getElementById("hello"); //Casting with arrows - BUT can be confused with React components.
var ammount = element.value;
const element2 = document.getElementById("hello"); //Casting with arrows - BUT can be confused with React components.
var ammount = element2.value;
const errorBag = {
    email: "hello"
};
class Frock {
    constructor() {
        this.prop = "new";
    }
}
//6. Optional Chaining
const payload = {
    name: "Jules",
    age: 28,
    job: { title: "Developer", salary: 50000 }
};
console.log((_a = payload === null || payload === void 0 ? void 0 : payload.job) === null || _a === void 0 ? void 0 : _a.title);
//7. Null Coalescing
// It's a Better Yypescipt for when you want to set a default value, in case something comes back as null
// The vanilla JavaScript way
const userinput = "test";
const storedData = userinput || "hello";
// The typeScript way
const userinput2 = "test";
const storedData2 = userinput !== null && userinput !== void 0 ? userinput : "hello";
