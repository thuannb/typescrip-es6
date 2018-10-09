"use strict";
console.log("----------------------------------------");
console.log("Lesson18:class cac phuong thuc cua classes");
var Person18 = /** @class */ (function () {
    function Person18(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person18.talk = function () {
        console.log("Phuong thuc static.Khong can khoi tao");
    };
    return Person18;
}());
var p18 = new Person18("ThuanNB");
Person18.talk();
//# sourceMappingURL=lesson18.js.map