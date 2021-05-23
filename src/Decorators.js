//1.0 A simple Decorator Factory - which which bring sin code when the class loads.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SimpleDecorator(name) {
    return function (constructor) {
        console.log("" + name);
    };
}
var Worm = /** @class */ (function () {
    function Worm() {
        this.name = "Jules";
        console.log("Breathing fire");
    }
    Worm = __decorate([
        SimpleDecorator("Hello")
    ], Worm);
    return Worm;
}());
var Jules = new Worm();
//2.0 A more complex decorator for a class
function myDecorator(myhtml, hookid) {
    return function (constructor, propertyname, propertydescriptor) {
        var htmlobj = document.getElementById("p"); // Grab the html
        var theobj = new constructor(); // Now you can access data from the class!
    };
}
var Carpet = /** @class */ (function () {
    function Carpet() {
        this.fabric = "cotton";
        console.log("Hi - i'm a carpet");
    }
    Carpet = __decorate([
        myDecorator("<h1>Hello World</h1>", "mypara")
    ], Carpet);
    return Carpet;
}());
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
var myDec = /** @class */ (function () {
    function myDec() {
        console.log("Breathing fire");
    }
    myDec = __decorate([
        FirstDec("Hi"),
        SecondDec("Hi")
    ], myDec);
    return myDec;
}());
//4.0 Decorators for functions
function howmanyhorns(propertyname) {
    return function (target, propertyname, propertydescriptor) {
        console.log("Horns target is " + target);
        console.log("Horns property name is " + propertyname);
        console.log("Horns descriptor is " + propertydescriptor);
    };
}
var Devil = /** @class */ (function () {
    function Devil() {
        this.horns = 2;
    }
    __decorate([
        howmanyhorns("hi")
    ], Devil.prototype, "horns");
    return Devil;
}());
//  5.0 Decorators for Accessors (setters & getters)
function accessDec(real) {
    return function () {
        // target: any,
        // propertyname: string,
        // descriptor: PropertyDescriptor
        var args = [];
        for (
        // target: any,
        // propertyname: string,
        // descriptor: PropertyDescriptor
        var _i = 0; 
        // target: any,
        // propertyname: string,
        // descriptor: PropertyDescriptor
        _i < arguments.length; 
        // target: any,
        // propertyname: string,
        // descriptor: PropertyDescriptor
        _i++) {
            // target: any,
            // propertyname: string,
            // descriptor: PropertyDescriptor
            args[_i] = arguments[_i];
        }
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
var MyAccessor = /** @class */ (function () {
    function MyAccessor(horns) {
        this.horns = horns;
    }
    Object.defineProperty(MyAccessor.prototype, "mySetter", {
        set: function (value) {
            this.horns = 5;
        },
        enumerable: false,
        configurable: true
    });
    MyAccessor.prototype.mynewmethod = function () {
        return "retunring this";
    };
    Object.defineProperty(MyAccessor.prototype, "mygetter", {
        get: function () {
            return this.horns;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        accessDec(true)
    ], MyAccessor.prototype, "mySetter");
    __decorate([
        accessDec(true)
    ], MyAccessor.prototype, "mynewmethod");
    __decorate([
        accessDec(true)
    ], MyAccessor.prototype, "mygetter");
    MyAccessor = __decorate([
        accessDec(true)
    ], MyAccessor);
    return MyAccessor;
}());
// 6.0 Decorators which are run code when instances are loaded.
function instanceDec(myany, id) {
    // Decorator factory
    return function (//Uses Generics so that you can pass in any class
    // Decorator function
    myconstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            // This block is executed when the instance is created.
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = 
                //Calls constructor of the class passed in so that you know whne the instanmce is created
                _super.call(this) || this;
                console.log("Instance Decorator has been created");
                return _this;
            }
            return class_1;
        }(myconstructor));
    };
}
var instanceFunc = /** @class */ (function () {
    function instanceFunc() {
    }
    instanceFunc = __decorate([
        instanceDec("Hi", "No")
    ], instanceFunc);
    return instanceFunc;
}());
var jules3 = new instanceFunc(); //Now when you create an instance the decorator code block is used...
