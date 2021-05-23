"use strict";
class Room {
    constructor(name) {
        this.name = name;
    }
}
class Bedroom extends Room {
    personEnters() {
        console.log("Person enter the room they shut the door");
    }
}
class Livingroom {
    constructor() { }
    static getInstance() {
        if (Livingroom.myLounge) {
            return Livingroom.myLounge;
        }
        else {
            Livingroom.myLounge = new Livingroom();
            return Livingroom.myLounge;
        }
    }
}
let Alice;
Alice = {
    name: "Alice",
    age: 27,
    greeting(phrase) {
        console.log("Hey everybody!");
    }
};
