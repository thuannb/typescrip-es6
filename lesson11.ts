console.log("----------------------------------------");
console.log("Lesson11:Rest Parametter");
console.log("Truyen vao tung phan tu nhung nhan lai la 1 mang");

let displayColor = function (message: string, ...colorList: string[]) {
    console.log(message);
    console.log(colorList);
    // colorList.forEach(item => {
    //     console.log(item)
    // });
    for (let index = 0; index < colorList.length; index++) {
        console.log(colorList[index]);
    }
}

displayColor("Hello", "Red");
displayColor("Hello", "Red", "Blue");
displayColor("Hello", "Red", "Blue", "Green");