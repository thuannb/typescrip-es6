function greetPerson(strName: string) {
    if (strName === "ThuanNB")
        greet = "Co che Hoisting: Hello ThuanNB";
    else
         greet = "Co che Hoisting: Hello " + strName;

    console.log("-----Lession 3- Hoisting");
    console.log("Co che Hoisting khai bao bien trung trong 1 ham va duoc khai bao o duoi cung van ok");
    console.log(greet);
    var greet
}
greetPerson("ThuanNB");