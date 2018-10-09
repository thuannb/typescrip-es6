console.log("----------------------------------------");
console.log("Lesson18:class cac phuong thuc cua classes");

class Person18 {
    constructor(name:string) {
        this.name = name;
        console.log(this.name + " constructor");
    }

    static talk(){
        console.log("Phuong thuc static.Khong can khoi tao");
    }
}

let p18 = new Person18("ThuanNB");
Person18.talk();