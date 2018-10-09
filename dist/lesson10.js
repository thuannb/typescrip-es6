"use strict";
console.log("----------------------------------------");
console.log("Lesson10:Default Parametter");
var getBonus = function (_value) {
    if (_value === void 0) { _value = 10; }
    console.log(_value);
};
getBonus(); //Ham khong can truyen tham so vao
console.log("2 parametter");
var getBonus2 = function (_value, _tax) {
    if (_value === void 0) { _value = 10; }
    if (_tax === void 0) { _tax = 30; }
    console.log(_value + _tax);
};
getBonus2(undefined, 40); //Ham khong can truyen tham so vao thu nhat vao
console.log("Tham so sau co the gan gia tri cua tham so truoc");
var getBonus3 = function (_value, _tax) {
    if (_value === void 0) { _value = 10; }
    if (_tax === void 0) { _tax = _value + 2; }
    console.log(_value + _tax);
    console.log(arguments.length);
};
getBonus3(20);
console.log("Tham so * voi 1 function");
var getPercent = function () { return 5; };
var getBonus4 = function (_value, _tax) {
    if (_value === void 0) { _value = 10; }
    if (_tax === void 0) { _tax = 1 * getPercent(); }
    console.log(_value + _tax);
    console.log(arguments.length);
};
getBonus4(50, 40);
//# sourceMappingURL=lesson10.js.map