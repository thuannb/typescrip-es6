console.log("------------------------------------------");
console.log("Lesson7:Kieu du lieu:BaseType");
let booleanType: boolean = true;
console.log(booleanType);

let numberType: number = 9;
console.log(numberType);

let fullName: string = "Nguyen Binh Thuan";
console.log(fullName);

console.log("Bien String nhung co Expression(Cong thuc tinh toan)");
let firstName: string = "Nguyen Binh Thuan";
let age: number = 29;
let firstName_Age = `
Hello, my name is ${firstName}
I'll be ${ age + 1} years old next month.
`;
console.log(firstName_Age);

console.log("Mang: number[], Array<number>");
let listNumber: number[] = [1, 2, 4];
let listArray: Array<number> = [1, 2, 4];
for (let i = 0; i < listArray.length; i++) {
    console.log(listArray[i]);
}

console.log("enum");
enum Color { Red, BLue, Green };
let colorName: string = Color[Color.Green];
console.log(colorName);

console.log("Tham khao them o trang: http://typescriptlang.org");