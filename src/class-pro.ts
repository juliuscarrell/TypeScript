abstract class Room {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract personEnters(): any;
}

class Bedroom extends Room {
  personEnters(): any {
    console.log("Person enter the room they shut the door");
  }
}

class Livingroom {
  static myLounge: Livingroom;
  private constructor() {}

  static getInstance(): Livingroom {
    if (Livingroom.myLounge) {
      return Livingroom.myLounge;
    } else {
      Livingroom.myLounge = new Livingroom();
      return Livingroom.myLounge;
    }
  }
}

interface Human {
  name: string;
  age: number;

  greeting(phrase: string): void;
}

let Alice: Human;

Alice = {
  name: "Alice",
  age: 27,
  greeting(phrase: string) {
    console.log("Hey everybody!");
  }
};
