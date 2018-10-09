"use strict";
console.log("----------------------------------------");
console.log("Lesson8:Arrow Function.Cach viet 1 function tat");
var calcSalary = function () {
    return 2000000;
};
var calcSalaryArrow = function (bonus, tax) { return (5000000 + bonus) - tax; };
console.log(calcSalary());
console.log(calcSalaryArrow(200000, 10000));
//# sourceMappingURL=lesson8.js.map