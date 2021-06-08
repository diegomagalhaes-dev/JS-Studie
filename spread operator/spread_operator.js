// Muito usado para imutabilidade (criar um novo objeto a partir de outro já existente)
// --> O spread operator pega um objeto iterável (array, string...) e desmembra ele em partes individuais 

// 1. Array
const vet = [
    { name: "ana", age: 9 },
    { name: "joão", age: 23 },
    { name: "livia", age: 20 }
];

const newVet = [...vet, { name: "Lucas", age: 14 }];
console.table(newVet);

// -> No exemplo abaixo, o vetor "topSeries" - além dos seus próprios elementos - recebe os vetores "topComedySeries" e "topDramaSeries", através do spread operator, que desmembra eles e coloca os elementos deles em "topSeries"
const topComedySeries = [
    "The Office",
    "Silicon Valley",
    "Rick and Morty"
];
const topDramaSeries = [
    "Sons of Anarchy",
    "Game of Thrones",
    "Breaking Bad"
];

const topSeries = [
    "Falcon and Winter Soldier",
    "Mad Man",
    ...topComedySeries,
    "Parks and Recreation",
    "Dark",
    ...topDramaSeries
];

console.log(topSeries[2]);
console.table(topSeries);

// 2. Functions

// -> Forma tradicional 
console.log(
    Math.max(2, 3, 1, 6)
);
// -> Usando spread operator
const numbers = [2, 3, 1, 6];
console.log(
    Math.max(...numbers)
);