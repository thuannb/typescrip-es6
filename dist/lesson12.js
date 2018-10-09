"use strict";
console.log("----------------------------------------");
console.log("Lesson12:Spread Parametter");
console.log("Truyen vao 1 mang, va lay ra tung phan tu. Nguoc lai voi Rest Parameter");
var displayColorSpread = function () {
    var colorList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colorList[_i] = arguments[_i];
    }
    for (var item in colorList) {
        console.log(colorList[item]);
    }
};
var color = ["Red", "Blue", "Green"];
displayColorSpread.apply(void 0, color);
//# sourceMappingURL=lesson12.js.map