"use strict";
const input1 = 3;
const input2 = 4;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(input1, input2));
//New way of doing class"
class Person {
    constructor(name) {
        // ...with new Constructor function
        this.name = name;
        console.log(name); // Logs global name
        console.log(this.name); // Logs class instance name
    }
}
const me = new Person("Jules");
let richard = { name: "richard" };
//old "classes way"
console.log("Jules2");
let animal = (function () {
    // old way of doing classes woth old constrcutor
    species: string;
    function Animal(species) {
        this.species = species;
    }
    return animal;
})();
// class and methods
class Bathroom {
    constructor(colour) {
        this.colour = colour;
    }
    flushloo() {
        console.log("Loo is flushed");
    } // stnadard method creation
    getcolour() {
        console.log("Bathroom is painted" + this.colour);
    } // stnadard method creation
    getwallpaper() { }
}
let mybathroom = new Bathroom("Red");
mybathroom.getcolour(); // Prints Red ;
let adHocBathroom = { getcolour: mybathroom.getcolour }; // adhoc object get the concrete object functions as a Property
adHocBathroom.getcolour(); // returns undefined beciase adHocBathroom is not an instance of Bathroom\\
adHocBathroom.getwallpaper(); // ad hoc object not allowed to invoke because it is not an instance of Bathroom
class House {
    constructor(streetnumber) {
        this.streetnumber = streetnumber;
    }
    changenumber(newNum) {
        this.streetnumber = newNum;
    }
    printnumber() {
        console.log(this.streetnumber);
    }
}
const myhouse = new House(31);
myhouse.printnumber(); // prints 31
myhouse.changenumber(25);
myhouse.printnumber(); // prints 25
console.log(myhouse.streetnumber); // cannot log because streetnumber is private
let myobj = { name: "Jules" };
console.log(myobj);
class Lamp {
    constructor(shadecolour) {
        this.shadecolour = shadecolour;
        this.size = 4;
    }
    changesize() {
        this.size += 1;
    }
}
let mylamp = new Lamp("Yellow");
console.log(mylamp.changesize()); // can change mylamp properties
class BedsideLamp extends Lamp {
    constructor() {
        super("Green");
        this.size = 5; // all good to access protected property
        this.bulbtype = "Bright";
    }
    get lampBulbType() {
        return this.bulbtype;
    }
    set lampBulbType(bulbtype) { }
    static changeBrightness() {
        console.log("Brightness has been changed");
    }
}
BedsideLamp.powerType = "electricity";
BedsideLamp.changeBrightness();
let newLamp = new BedsideLamp();
