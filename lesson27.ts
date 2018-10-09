console.log("----------------------------------------");
console.log("Lesson27:interface");

interface IPerson {
    fName: string;
    lName: string,
    age?: number
}

var p27: IPerson = {
    fName: "Thuan",
    lName: "NB"
}

interface IStudent {
    fName: string,
    lName: string,
    age?: number
}

class Student27 implements IStudent {
    fName: string;
    lName: string;
    age?: number;
    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }
}

interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);