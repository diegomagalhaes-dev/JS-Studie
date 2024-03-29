// prototype: a herança em Java Script é baseada em protótipos

const personPrototype = {
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};

const createPerson = function (name, city, year) {
    const person = {
        name,
        city,
        year
    };
    Object.setPrototypeOf(person, personPrototype);
    return person;
};

const person1 = createPerson("Leandro", "Tiangua", 2001);
const person2 = createPerson("Linus Torvald", "Helsinki", 1969);

console.log(person1); 
console.log(person2);
console.log(person1.getAge()); 
console.log(person2.getAge());

console.log(person1.__proto__);
console.log(person2.__proto__);

console.log(person1.__proto__ === person2.__proto__); 