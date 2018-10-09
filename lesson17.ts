console.log("----------------------------------------");
console.log("Lesson17:class");
class Person {
    run() {
        console.log("Person is running...")
    }
}

class PersonInheirt extends Person{
    playFootball(){
        console.log("Play footbal...");
    }
}

let p = new Person();
console.log(p.run());

let p2 = new PersonInheirt();
console.log(p2.playFootball());