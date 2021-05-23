"use strict";
class Sapien {
    constructor() {
        this.walkingSpeed = 10;
        this.hasLimp = true;
    }
    whistling(number) {
        return "hello";
    }
}
let take;
take = (num) => {
    return "bye";
};
let myDog;
myDog = {
    walkingSpeed: 25
};
let testobj;
testobj = {
    walkingSpeed: 50,
    hasLimp: false
};
function move(myFn) {
    let myresult = myFn(5);
}
let mynum = move((num) => {
    return num + 3;
});
let myWrongNum = move((num) => {
    return "Hi";
});
let optionalObj;
optionalObj = {
//   mandatory: "This is mandatory"
// optional: "This is Optional"
};
