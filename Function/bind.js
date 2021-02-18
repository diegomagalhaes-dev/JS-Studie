// -->> function (fn) : a fn é passada por parâmetro de forma dinâmica, 
// nos console.log invocamos-a passando duas functions: round e ceil, onde 
// round arredonda para o valor mais próximo e ceil para o inteiro >= 
// ao valor. 
const calculateArea = function (fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
    // --> "Math.PI * Math.pow(this.radius, 2)" --> toda essa expressão
    // é apenas um valor que passamos para a função "fn", que nesse caso é
    // uma função de arredondamento de valores (round / ceil)
};

const circle = {
    radius: 10,
    calculateArea
};
// -->> O bind encapsula o this (circle) dentro da função calculateArea
const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));
