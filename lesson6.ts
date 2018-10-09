console.log("-----------------------------------------")
console.log("Lesson6: keyword const")
console.log("const: not support hoisting")
console.log("const: Read only variable")
console.log("const: Phai co gia tri khi khai bao")
console.log("const: Kieu du lieu Object thi khong the new lai duoc. Nhung van cho phep gan gia tri")

const obj={
    name:"Anh Thuan"
}
console.log(obj.name);
obj.name = "Nguyen Binh Thuan";
console.log(obj.name);