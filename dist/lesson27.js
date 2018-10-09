"use strict";
console.log("----------------------------------------");
console.log("Lesson27:interface");
var p27 = {
    fName: "Thuan",
    lName: "NB"
};
var Student27 = /** @class */ (function () {
    function Student27(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    return Student27;
}());
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//# sourceMappingURL=lesson27.js.map