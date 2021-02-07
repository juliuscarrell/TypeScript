interface Walkable {
  readonly walkingSpeed: number;
  whistling: (number: number) => string;
}

class Sapien implements Limpable {
  walkingSpeed: number;
  hasLimp: Boolean;

  constructor() {
    this.walkingSpeed = 10;
    this.hasLimp = true;
  }

  whistling(number: number) {
    return "hello";
  }
}

interface Runnable {
  (number: number): string;
}

let take: Runnable;

take = (num: number) => {
  return "bye";
};

let myDog: Walkable;
myDog = {
  walkingSpeed: 25
};

interface Limpable extends Walkable {
  hasLimp: Boolean;
}

let testobj: Limpable;

testobj = {
  walkingSpeed: 50,
  hasLimp: false
};

type myFn = (num: number) => number;

function move(myFn: myFn) {
  let myresult = myFn(5);
}

let mynum = move((num: number) => {
  return num + 3;
});

let myWrongNum = move((num: number) => {
  return "Hi";
});

interface Optional {
  mandatory: string;
  optional?: string;
}

let optionalObj: Optional;

optionalObj = {
  mandatory: "This is mandatory"
  //   optional: "This is Optional"
};
