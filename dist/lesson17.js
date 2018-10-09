"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("----------------------------------------");
console.log("Lesson17:class");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is running...");
    };
    return Person;
}());
var PersonInheirt = /** @class */ (function (_super) {
    __extends(PersonInheirt, _super);
    function PersonInheirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonInheirt.prototype.playFootball = function () {
        console.log("Play footbal...");
    };
    return PersonInheirt;
}(Person));
var p = new Person();
console.log(p.run());
var p2 = new PersonInheirt();
console.log(p2.playFootball());
//# sourceMappingURL=lesson17.js.map