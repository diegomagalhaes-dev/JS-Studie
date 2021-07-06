let regExp = /^(\w+)(@\w+(\.\w{2,3})+)$/;
console.log(regExp.test("enterprise@gmail.com"))

let result = regExp.exec("enterprise@gmail.com")
console.log(result)
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3])
