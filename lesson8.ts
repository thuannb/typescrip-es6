console.log("----------------------------------------");
console.log("Lesson8:Arrow Function.Cach viet 1 function tat");
let calcSalary = function () {
    return 2000000;
}

let calcSalaryArrow = (bonus: number, tax:number) => (5000000 + bonus) - tax;

console.log(calcSalary());
console.log(calcSalaryArrow(200000, 10000));

