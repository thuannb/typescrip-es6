"use strict";
console.log("------------------------------------------");
console.log("Lesson7:Kieu du lieu:BaseType");
var booleanType = true;
console.log(booleanType);
var numberType = 9;
console.log(numberType);
var fullName = "Nguyen Binh Thuan";
console.log(fullName);
console.log("Bien String nhung co Expression(Cong thuc tinh toan)");
var firstName = "Nguyen Binh Thuan";
var age = 29;
var firstName_Age = "\nHello, my name is " + firstName + "\nI'll be " + (age + 1) + " years old next month.\n";
console.log(firstName_Age);
console.log("Mang: number[], Array<number>");
var listNumber = [1, 2, 4];
var listArray = [1, 2, 4];
for (var i = 0; i < listArray.length; i++) {
    console.log(listArray[i]);
}
console.log("enum");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["BLue"] = 1] = "BLue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var colorName = Color[Color.Green];
console.log(colorName);
console.log("Tham khao them o trang: http://typescriptlang.org");
//# sourceMappingURL=lesson7.js.map