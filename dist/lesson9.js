"use strict";
console.log("----------------------------------------");
console.log("Lesson9:Keyword this");
var employee = {
    id: "MSNV-001",
    greet: function () {
        var self = this;
        console.log(self.id);
    }
};
employee.greet();
//# sourceMappingURL=lesson9.js.map