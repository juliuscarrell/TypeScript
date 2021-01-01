// Array Rules

const persons = { name: "Jules", age: 27, hobbies: ["Football", 9] };

const person2: object = { name: "Jules", age: 27 };

let hobbies: string[];
hobbies = ["Hello"];
// hobbies = ["Goodbye", 44];

hobbies = ["Goodbye", "Ciao", "adios"];

for (const item of hobbies) {
  console.log(item.toUpperCase());
}

let skills: number[];
skills = [1, 2, 3, 4];

for (const item of skills) {
  // console.log(item.toUpperCase());
}

let flexiArray: any[];
flexiArray = ["All good in the Hood", 55, { name: "Dragon", age: 1500 }];

//Tuple

let tupleArray: [string, number]; //Tuple Array Declared

// tupleArray = [44, 55]; // Not allowed because first must be string

// tupleArray = ["hi", 55, 66]; // Not allowed because Tuple enforces only 2 items inside Array

tupleArray = ["Hello", 44]; // Perfect!

console.log(persons);

//ENUM

enum Role {
  ADMIN = 8,
  AUTHOR = 6,
  WRITER = 9
}

const employee = { name: "Tom", age: 30, role: Role.ADMIN };

console.log(employee.role);
