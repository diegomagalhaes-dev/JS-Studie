// forEach
const { passengers } = require("../data");

const dataAtual = new Date();
passengers.forEach(
    passenger => passenger.age = dataAtual.getFullYear() - passenger.birthYear
);

console.table(passengers);