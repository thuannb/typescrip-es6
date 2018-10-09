console.log("----------------------------------------");
console.log("Lesson9:Keyword this");

let employee = {
    id: "MSNV-001",
    greet: function () {
        var self = this;
        console.log(self.id)
    }
}

employee.greet();