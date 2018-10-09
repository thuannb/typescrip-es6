console.log("----------------------------------------");
console.log("Lesson14:Boc tach doi tuong (object)");
console.log("Boc tach 1 object ra thanh cac thuoc tinh");
console.log("Ap dung duoc dang Rest Paramter");

let objEmployee = {
    fName: "Thuan",
    lName: "Nguyen Binh",
    work: "Developer"
}

let { fName, lName, work } = objEmployee;
let { fName: f, lName: l, work: w } = objEmployee;//Doi ten thuoc tinh
console.log(fName);
console.log(lName);
console.log(work);