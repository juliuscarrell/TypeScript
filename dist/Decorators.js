"use strict";
//1.0 A simple Decorator Factory - which which bring sin code when the class loads.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function SimpleDecorator(name) {
    return function (constructor) {
        console.log(`${name}`);
    };
}
let Worm = class Worm {
    constructor() {
        this.name = "Jules";
        console.log("Breathing fire");
    }
};
Worm = __decorate([
    SimpleDecorator("Hello"),
    __metadata("design:paramtypes", [])
], Worm);
const Jules = new Worm();
//2.0 A more complex decorator for a class
function myDecorator(myhtml, hookid) {
    return function (constructor, propertyname, propertydescriptor) {
        let htmlobj = document.getElementById("p"); // Grab the html
        const theobj = new constructor(); // Now you can access data from the class!
    };
}
let Carpet = class Carpet {
    constructor() {
        this.fabric = "cotton";
        console.log("Hi - i'm a carpet");
    }
};
Carpet = __decorate([
    myDecorator("<h1>Hello World</h1>", "mypara"),
    __metadata("design:paramtypes", [])
], Carpet);
//3.0 Multiple Decorators
//Decorator 1
function FirstDec(words) {
    console.log("First invoked");
    return function (constructor) {
        console.log("First returned");
    };
}
//Decorator 2
function SecondDec(words) {
    console.log("Second invoked");
    return function (constructor) {
        console.log("Second returned");
    };
}
//Decorator Function
let myDec = class myDec {
    constructor() {
        console.log("Breathing fire");
    }
};
myDec = __decorate([
    FirstDec("Hi"),
    SecondDec("Hi"),
    __metadata("design:paramtypes", [])
], myDec);
//4.0 Decorators for functions
function howmanyhorns(objecttype, propertyname) {
    return function (target, propertyname, propertydescriptor) {
        console.log(`target is ${target}`);
        console.log(`property name is ${propertyname}`);
    };
}
class Devil {
    constructor() {
        this.horns = 2;
    }
}
__decorate([
    howmanyhorns,
    __metadata("design:type", Number)
], Devil.prototype, "horns", void 0);
//  5.0 Decorators for Accessors (setters & getters)
function accessDec(target, propertyname, propertydescriptor) {
    console.log(`target is ${target}`);
    console.log(`target is ${target}`);
    console.log(`property descriptor is ${propertydescriptor}`);
}
class MyAccessor {
    constructor() {
        this.horns = 2;
    }
    set mySetter(value) { }
}
__decorate([
    accessDec,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MyAccessor.prototype, "mySetter", null);
// 6.0 Decorators which are run code when instances are loaded.
function instanceDec() {
    return function (constructor, name, propertyDesc) {
        // return class extends constructor {
        //   constructor();
        //   super();
    };
}
