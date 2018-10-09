"use strict";
function greetPerson2(strName) {
    var greet;
    if (strName === "ThuanNB")
        greet = "Co che Hoisting: Hello ThuanNB";
    else
        greet = "Co che Hoisting: Hello " + strName;
    console.log("-----Lession 4- Tu khoa Let");
    console.log("Let: trong chuong trinh chi khai bao duoc 1 bien, Block-scope (trong 1 khoi lenh), Not support Hoisting, No giong nhu C#");
    console.log(greet);
}
greetPerson2("ThuanNB");
//# sourceMappingURL=lesson4.js.map