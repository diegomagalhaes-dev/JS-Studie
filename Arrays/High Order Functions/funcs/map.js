// Map()
const { passengers } = require("../data");

const anoAtual = new Date().getFullYear();

// 1. Quantos anos eles tem? 
const newPassergers = passengers.map(
    passenger => `${passenger.name} tem ${anoAtual - passenger.birthYear} anos`
);

console.table(newPassergers);

// 2. Palíndromo
const founds = passengers.map(passenger => {
    const reverseName = [].map
        .call(passenger.name, latter => latter)
        .reverse()
        .join("")

    if (reverseName.toLowerCase() === passenger.name.toLowerCase())
        return `This is palíndromo: ${passenger.name}`
});

console.table(founds);

// 3. Calcule o quadrado dos elementos de [1,5,6]
const arrayNumbers = [1, 5, 6];

const squareNumbers = arrayNumbers.map(number => number ** 2);
console.log(squareNumbers);