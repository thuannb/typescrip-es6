console.log("----------------------------------------");
console.log("Lesson26:Constructor");

class Student {
    public fName: string;
    public lName: string;
    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }
}

class Student2 {
    constructor(public fName: string, public lName: string) {
    }
}

let student = new Student2("Thuan", "NB");
console.log(student.fName + " " + student.lName);