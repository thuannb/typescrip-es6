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
console.log("Lesson19:classes inherit");
console.log("Ke thua duoc constructor va phuong thuc thong qua tu khoa super");
var Person19 = /** @class */ (function () {
    function Person19(name) {
        console.log(name + " Person classed inherit");
    }
    Person19.prototype.getID = function () {
        return 10;
    };
    return Person19;
}());
var Employee19 = /** @class */ (function (_super) {
    __extends(Employee19, _super);
    function Employee19(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee classed");
        return _this;
    }
    Employee19.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return Employee19;
}(Person19));
var emp19 = new Employee19("ThuanNB");
console.log(emp19.getID());
//# sourceMappingURL=lesson19.js.map