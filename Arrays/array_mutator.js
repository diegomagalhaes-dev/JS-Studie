// Mutathor Methods 
const languages = ["Python", "C", "Java", "Dart"];
console.log(languages.push("Go"));
console.log(languages.pop());
console.log(languages);
console.log(languages.unshift("Pascal"));
console.log(languages);
console.log(languages.shift());
console.log(languages);

// Método Splice 
//     -> No primeiro parâmetro em que POSIÇÃO iremos adicionar/remover itens 
//     -> No segundo parâmetro definimos o número de itens a serem removidos (se for o caso)
//     -> Os demais parâmetros especificam os novos itens a serem adicionados (se for o caso)
const js_skills = ["Angular JS", "Vue JS", "Ember JS"];
console.log(js_skills);

// Adicionando, sem remover nada (por isso 0 no segundo parâmetro)
js_skills.splice(0, 0, "React JS");
console.log(js_skills);

// Adicionando na terceira posição, removendo o item que está nela
js_skills.splice(3, 1, "Node JS");
console.log(js_skills);

// Removendo a elemento da segunda posição sem adicionar nada novo
js_skills.splice(2, 1);
console.log(js_skills);

// Método Sort:
//     Ordena o array com base em uma condição especificada, e retorna -1 para ordenar decrescentemente e 1 para ordenar crescentemente 
const person = [
    { name: "João", age: 12 },
    { name: "Lucas", age: 14 },
    { name: "Ana", age: 17 }
];

// --> Ordenando crescentemente pelos nomes, usando operador ternário
person.sort((a, b) => {
    return (a.name > b.name) ? -1 : 1;
});
console.log(person);

// --> Ordenando crescentemente pela idade 
person.sort((a, b) => {
    if (a.age < b.age) return -1;
});
console.log(person);