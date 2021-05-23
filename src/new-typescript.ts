//1. Advanced Typing

// Intersection Typing --->> Let's you combine two types into one blueprint

type Wheels = {
  count: number;
  material: string;
};

type Chassis = {
  colour: string;
};

type Car = Wheels & Chassis; // creates combination of intersection types

// Now if an object implements the type, then its needs to implement ALL the properties.

let Brum: Car = {
  count: 4,
  material: "chrome",
  colour: "red"
};

//2. Type Guards

function choose(choice: Wheels | Chassis) {
  console.log(choice.colour); // Only Chassis has colour so TypeScript
  //can't guarentee that the property of the choice object exists
}

function objectGuard(choice: Wheels | Chassis) {
  if ("colour" in choice) {
    console.log(choice.colour);
  } // Only Chassis has colour so TypeScript
  //can't guarentee that the property of the choice object exists
}

class Washer {
  colour = "white";
}

class Dryer {
  type = "clothes";
}

type Appliance = Washer | Dryer;

function classGuard(choice: Washer | Dryer) {
  if (choice instanceof Washer) {
    console.log(choice.colour);
  } // Only Washer has colour so TypeScript needs the Guard to able to use the colour property
  //can't guarentee that the property of the choice object exists
}

// 3. Discriminating Unions

// Using a combination of similar properties and awitch statements so to be able to tell between the union types.

interface Horse {
  type: "Horse";
  runningSpeed: number;
}

interface Bird {
  type: "Bird";
  flyingSpeed: number;
}

type Animal = Bird | Horse;

function move(animal: Animal) {
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

const element = <HTMLInputElement>document.getElementById("hello"); //Casting with arrows - BUT can be confused with React components.

var ammount = element.value;

const element2 = document.getElementById("hello") as HTMLInputElement; //Casting with arrows - BUT can be confused with React components.

var ammount = element2.value;

//5. Index Properties

interface Washable {
  [id: string]: string;
}

const errorBag: Washable = {
  email: "hello"
};

class Frock implements Washable {
  prop: string;

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

console.log(payload?.job?.title);

//7. Null Coalescing

// It's a Better Yypescipt for when you want to set a default value, in case something comes back as null

// The vanilla JavaScript way

const userinput: string = "test";

const storedData: string = userinput || "hello";

// The typeScript way

const userinput2: string = "test";

const storedData2: string = userinput ?? "hello";
