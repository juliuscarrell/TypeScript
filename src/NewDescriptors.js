var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testDec(target, methodname, description) {
    console.log("" + methodname);
    console.log("" + description);
}
var testDesc = /** @class */ (function () {
    function testDesc() {
        this.themessage = "The message has been spoken";
    }
    testDesc.prototype.showMessage = function () {
        console.log(this.themessage);
    };
    __decorate([
        testDec
    ], testDesc.prototype, "showMessage");
    return testDesc;
}());
var theobjof = {
    name: "Jules"
};
console.log(Object.getOwnPropertyDescriptor(theobjof, "name"));
