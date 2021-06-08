// Declaração literal 
const sumLiteral = function (a, b) {
    return a + b;
}

const subLiteral = function (a, b) {
    return a - b;
}

const calculatorLiteral = function (fn) {
    return function (a, b) {
        return fn(a, b);
    };
}
console.log(calculatorLiteral(sumLiteral)(1, 5));
console.log(calculatorLiteral(subLiteral)(10, 2));

// Declaração com Arrow function (I)
const sumArrowI = (a, b) => {
    return a + b;
};

const subArrowI = (a, b) => {
    return a - b;
}

const calculatorArrowI = (fn) => {
    return (a, b) => {
        return fn(a, b);
    };
}

console.log(calculatorArrowI(sumArrowI)(1, 5));
console.log(calculatorArrowI(subArrowI)(10, 2));

// Declaração com Arrow function (II)
const sumArrowII = (a, b) => a + b;

const subArrowII = (a, b) => a - b;

const calculatorArrowII = fn => (a, b) => fn(a, b);


console.log(calculatorArrowII(sumArrowII)(1, 5));
console.log(calculatorArrowII(subArrowII)(10, 2));