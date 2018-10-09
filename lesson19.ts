console.log("----------------------------------------");
console.log("Lesson19:classes inherit");
console.log("Ke thua duoc constructor va phuong thuc thong qua tu khoa super");

class Person19 {
    constructor(name: string) {
        console.log(name + " Person classed inherit")
    }

    getID() {
        return 10;
    }
}

class Employee19 extends Person19 {
    constructor(name: string) {
        super(name);
        console.log(name + " Employee classed");
    }
    getID(){
        return super.getID();
    }
}

let emp19 = new Employee19("ThuanNB");
console.log(emp19.getID());