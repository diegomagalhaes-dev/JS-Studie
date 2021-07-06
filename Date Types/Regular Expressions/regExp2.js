// Grupo de caracteres 

let regExp = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.exec("digengup@gmail.com");
console.log(result);
