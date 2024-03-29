// Parametros, Rest Parameters e Arguments 

// --> A passagem de parâmetros na invocação da função não necessariamente deve obedecer o que foi declarado na função 
const sum = function (a, b) {
    return a + b;
};

console.log(sum(1));
console.log(sum(1, 2, 4));

// --> Valores padrão (default parameters)
const multiply = function (a = 7, b = 3) {
    return a * b;
};

console.log(multiply(3, 4));
console.log(multiply(2));
console.log(multiply());

// --> Para encontrar os parâmetros de uma função, podemos utilizar o atributo "arguments":
const subtract = function () {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};

console.log(subtract(1, 2, 3, 4, 5, 6, 7, 8, 9));

// --> Rest parameters
const restParameters = function (a, b, c, ...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};

console.log(restParameters(1, 2, 3, 4, 5, 6, 7, 8, 9));

// == DIFERENÇA Arguments x Rest Parameters 
// 1. rest parameters são os únicos que não foram atribuidos a um nome separado, enquanto os arguments object contêm todos os argumentos passados para a função;
// 2. o objeto arguments não é um array, enquanto  rest parameters são instâncias Array,  isso significa que métodos como sort, map, forEach ou pop podem ser aplicados diretamente;
// 3. o objeto arguments possui a funcionalidade adicional de especificar ele mesmo (como a propriedade callee). 