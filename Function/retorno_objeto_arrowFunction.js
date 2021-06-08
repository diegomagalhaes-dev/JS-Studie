const createPerson = function (name, city, year) {
    return {
        name,
        city,
        year
    };
};

const person = createPerson("Jonas", "Ohio", 22);
console.log(person);

// para usar arrow function e retornar um object:
const createPersonI = (name, city, year) => ({ name, city, year });
const personI = createPersonI("James", "NY", 25);
console.log(person);