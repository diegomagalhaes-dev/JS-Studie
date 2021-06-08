const addTo = a => b => a + b;

const increment10 = addTo(10);
const increment20 = addTo(20);
const increment30 = addTo(30);

console.log(increment10) // increment's retorna uma função

console.log(increment10(10)); // estou invocando a função retornada por increment10 passando o parâmetro 10 
console.log(increment20(20));
console.log(increment30(30));
