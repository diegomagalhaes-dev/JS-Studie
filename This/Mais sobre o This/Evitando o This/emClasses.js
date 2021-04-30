// -> com classes
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const person1 = new Person("Diêgo");
console.log(person1.getName());

// -> sem classes
const dog = name => ({
    getDog: () => name
})

const dog1 = dog('Snow');
console.log(dog1.getDog());