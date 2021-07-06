// --> Function declaration:
function sum(a, b) {
    return a + b;
}

// --> Function expression:
const sub = function (a, b) {
    return a - b;
}

// --> Função passada por parâmetro 
const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b);
    }
}

console.log(calculator(sum)(12, 4));
console.log(calculator(sub)(12, 4));