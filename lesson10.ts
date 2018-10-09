console.log("----------------------------------------");
console.log("Lesson10:Default Parametter");
let getBonus = function (_value: number = 10) {
    console.log(_value);
}
getBonus();//Ham khong can truyen tham so vao

console.log("2 parametter");
let getBonus2 = function (_value: number = 10, _tax: number = 30) {
    console.log(_value + _tax);
}
getBonus2(undefined, 40);//Ham khong can truyen tham so vao thu nhat vao

console.log("Tham so sau co the gan gia tri cua tham so truoc");
let getBonus3 = function (_value: number = 10, _tax: number = _value + 2) {
    console.log(_value + _tax);
    console.log(arguments.length);
}
getBonus3(20);


console.log("Tham so * voi 1 function");
let getPercent = () => 5;
let getBonus4 = function (_value: number = 10, _tax: number = 1 * getPercent()) {
    console.log(_value + _tax);
    console.log(arguments.length);
}
getBonus4(50, 40);

