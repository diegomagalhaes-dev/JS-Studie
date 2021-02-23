// Com a declaração comum
const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: function () {
        return (new Date()).getFullYear() - this.year;
    }
};

console.log(person);
console.log(person.getAge());

// -->> Agora usando Arrow Function: 
const personArrow = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => (new Date()).getFullYear() - this.year
};

console.log(personArrow);
console.log(personArrow.getAge()); // NaN, pois o this de "year" não pode ser passado para o método declarado com Arrow Function

// Com a declaração comum
const sum = function () {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// -->> Agora com Arrow Function
const sumArrow = () => {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sumArrow(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Imprime os arguments do módulo do node, pois não conseguiu criar os proprios arguments, assim como ocorreu em This