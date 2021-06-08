// --> Diferença entre Set e Array

// ==> Array 
const array = [];
array.push(10);
array.push(10);
array.push(10);

console.log(array.length);

// ==> Set
const set = new Set();
set.add(10);
set.add(10);
set.add(10);

console.log(set.size);

// == Podemos o Set para eliminar duplicações indesejadas nos Arrays ==
let players = ["DLima", "DLima", "Leandro", "Victor"];

console.log(players);

players = new Set(players);

console.log(players);

