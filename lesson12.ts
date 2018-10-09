console.log("----------------------------------------");
console.log("Lesson12:Spread Parametter");
console.log("Truyen vao 1 mang, va lay ra tung phan tu. Nguoc lai voi Rest Parameter");

let displayColorSpread = function (...colorList: string[]) {
    for(let item in colorList){
        console.log(colorList[item]);
    }
}

let color = ["Red", "Blue", "Green"];
displayColorSpread(...color);