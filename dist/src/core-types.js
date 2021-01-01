"use strict";
// Array Rules
const persons = { name: "Jules", age: 27, hobbies: ["Football", 9] };
const person2 = { name: "Jules", age: 27 };
let hobbies;
hobbies = ["Hello"];
// hobbies = ["Goodbye", 44];
hobbies = ["Goodbye", "Ciao", "adios"];
for (const item of hobbies) {
    console.log(item.toUpperCase());
}
let skills;
skills = [1, 2, 3, 4];
for (const item of skills) {
    // console.log(item.toUpperCase());
}
let flexiArray;
flexiArray = ["All good in the Hood", 55, { name: "Dragon", age: 1500 }];
//Tuple
let tupleArray; //Tuple Array Declared
// tupleArray = [44, 55]; // Not allowed because first must be string
// tupleArray = ["hi", 55, 66]; // Not allowed because Tuple enforces only 2 items inside Array
tupleArray = ["Hello", 44]; // Perfect!
console.log(persons);
//ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 8] = "ADMIN";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
    Role[Role["WRITER"] = 9] = "WRITER";
})(Role || (Role = {}));
const employee = { name: "Tom", age: 30, role: Role.ADMIN };
console.log(employee.role);
