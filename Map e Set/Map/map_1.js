const timeUnits = new Map([
    ["second", 1],
    ["minute", 60],
    ["hour", 3600]
]);
console.log(timeUnits);
console.log(Array.from(timeUnits)); // converte para array novamente

// Métodos: 
console.log(timeUnits.size); // retorna o tamanho
timeUnits.set("day", 86400); // o método size adiciona um valor ao Map 
timeUnits.forEach((values, key) => {
    console.log(values, key);
}) // o forEach retorna primeiro o "valor" e depois a "chave"
console.log(timeUnits.has("hour")); // o has retorna true caso a chave exista
console.log(timeUnits.get("second")); // get retorna o valor da chave caso ela exista
console.log(timeUnits.get("year")); // get retorna undefined caso a chave não exista 
timeUnits.delete("day"); // além de deletar, o operador delete retorna false caso a propriedade a ser deletada não exista
console.log(timeUnits);

timeUnits.clear(); // limpa todo o mapa

console.log(timeUnits);