//1.0 A simple Decorator Factory - which which bring sin code when the class loads.

function SimpleDecorator(name: string) {
  return function(constructor: Function) {
    console.log(`${name}`);
  };
}

@SimpleDecorator("Hello")
class Worm {
  name = "Jules";
  constructor() {
    console.log("Breathing fire");
  }
}

const Jules = new Worm();

//2.0 A more complex decorator for a class

function myDecorator(myhtml: string, hookid: string): any {
  return function(
    constructor: any,
    propertyname: string,
    propertydescriptor: PropertyDescriptor
  ) {
    let htmlobj = document.getElementById("p"); // Grab the html
    const theobj = new constructor(); // Now you can access data from the class!
  };
}

@myDecorator("<h1>Hello World</h1>", "mypara")
class Carpet {
  fabric: string = "cotton";

  constructor() {
    console.log("Hi - i'm a carpet");
  }
}

//3.0 Multiple Decorators

//Decorator 1

function FirstDec(words: string) {
  console.log("First invoked");
  return function(constructor: Function) {
    console.log("First returned");
  };
}

//Decorator 2

function SecondDec(words: string): any {
  console.log("Second invoked");
  return function(constructor: any) {
    console.log("Second returned");
  };
}

//Decorator Function

@FirstDec("Hi")
@SecondDec("Hi")
class myDec {
  constructor() {
    console.log("Breathing fire");
  }
}

//4.0 Decorators for functions

function howmanyhorns(propertyname: string): any {
  return function(
    target: any,
    propertyname: string,
    propertydescriptor: PropertyDescriptor
  ) {
    console.log(`Horns target is ${target}`);
    console.log(`Horns property name is ${propertyname}`);
    console.log(`Horns descriptor is ${propertydescriptor}`);
  };
}

class Devil {
  @howmanyhorns("hi")
  horns: number = 2;
  constructor() {}
}

//  5.0 Decorators for Accessors (setters & getters)

function accessDec(real: boolean) {
  return function(
    // target: any,
    // propertyname: string,
    // descriptor: PropertyDescriptor

    ...args
  ) {
    console.log(args);
    // console.log(`HERE Accessor Decorator`);
    // console.log(`target.. is ${target}`);
    // console.log(target);
    // console.log(`Accessor name is ${propertyname}`);
    // console.log(propertyname);
    // console.log(`property descriptor is ${descriptor}`);
    // console.log(descriptor);
  };
}

@accessDec(true)
class MyAccessor {
  horns: number;

  constructor(horns: number) {
    this.horns = horns;
  }

  @accessDec(true)
  set mySetter(value: string) {
    this.horns = 5;
  }

  @accessDec(true)
  mynewmethod(): string {
    return "retunring this";
  }

  @accessDec(true)
  get mygetter(): number {
    return this.horns;
  }
}

// 6.0 Decorators which are run code when instances are loaded.

function instanceDec(myany: string, id: string) {
  // Decorator factory
  return function<T extends { new (...args: any[]): { mypeople: string } }>( //Uses Generics so that you can pass in any class
    // Decorator function
    myconstructor: T
  ) {
    return class extends myconstructor {
      // This block is executed when the instance is created.
      constructor(..._: any[]) {
        //Calls constructor of the class passed in so that you know whne the instanmce is created
        super(); //has to call super
        console.log("Instance Decorator has been created");
      }
    };
  };
}

@instanceDec("Hi", "No")
class instanceFunc {
  mypeople: string;
  constructor() {}
}

const jules3 = new instanceFunc(); //Now when you create an instance the decorator code block is used...
