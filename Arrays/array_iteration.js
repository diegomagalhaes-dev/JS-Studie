// forEach
const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
frameworks.forEach((nameFramework) => console.log(nameFramework));

// filter 
const person = [
    {
        name: "Jonas",
        age: 21
    },
    {
        name: "Lucas",
        age: 24
    },
    {
        name: "Larissa",
        age: 17
    }
];

const adultPerson = person.filter((person) => person.age > 18);
console.log(adultPerson);

// find -> retorna o primeiro valor encontrado que corresponda a condição
const personLarissa = person.find((person) => person.name === "Larissa");
console.log(personLarissa);

// map -> retorna um novo array, isso nos permite fazer modificações que queremos no array que será retornado 
const personApresentation = person.map((person) => `A pessoa ${person.name} tem ${person.age} anos.`);
console.log(personApresentation);

// reduce -> é basicamente um método de iteração acumulativo> no exemplo abaixo, acumulei na variável totalAge - que começa em zero - a idade das pessoas, no final dividi por três
const meanAge = (person.reduce((totalAge, person) => {
    return totalAge + person.age;
}, 0) / 3);
console.log(meanAge);