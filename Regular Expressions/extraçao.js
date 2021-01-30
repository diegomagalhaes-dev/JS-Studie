let regExp = /^(\w+)(@\w+(\.\w{2,3})+)$/;
let result = regExp.exec("digengup@gmail.com");
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);