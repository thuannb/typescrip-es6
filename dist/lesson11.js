"use strict";
console.log("----------------------------------------");
console.log("Lesson11:Rest Parametter");
console.log("Truyen vao tung phan tu nhung nhan lai la 1 mang");
var displayColor = function (message) {
    var colorList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colorList[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colorList);
    // colorList.forEach(item => {
    //     console.log(item)
    // });
    for (var index = 0; index < colorList.length; index++) {
        console.log(colorList[index]);
    }
};
displayColor("Hello", "Red");
displayColor("Hello", "Red", "Blue");
displayColor("Hello", "Red", "Blue", "Green");
//# sourceMappingURL=lesson11.js.map