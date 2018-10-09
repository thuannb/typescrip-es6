"use strict";
console.log("----------------------------------------");
console.log("Lesson26:Constructor");
var Student = /** @class */ (function () {
    function Student(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    return Student;
}());
var Student2 = /** @class */ (function () {
    function Student2(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    return Student2;
}());
var student = new Student2("Thuan", "NB");
console.log(student.fName + " " + student.lName);
//# sourceMappingURL=lesson26.js.map