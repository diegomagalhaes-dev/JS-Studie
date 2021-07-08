// Curryng: ocorre justamente pela característas de Closure que as funções em JS possuem. Pois o curryng ocorre quando atribuímo o retorno de uma função (que é outra função) a uma variável, e somente depois a invocamos. 

const addTo = (a) => (b) => a + b;

const increment10 = addTo(10);
const increment20 = addTo(20);
const increment30 = addTo(30);

console.log(increment10); // increment's retorna uma função

console.log(increment10(10)); // estou invocando a função retornada por increment10 passando o parâmetro 10
console.log(increment20(20));
console.log(increment30(30));


// Por serem closures, é possível ter o acesso de "a" mesmo que a a+b seja invocado somente em outro momento (diferente da primeira invocação que retornou uma função)