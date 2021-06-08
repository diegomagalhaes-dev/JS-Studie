class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static orderPerson = (person1, person2) => person1.age - person2.age;

}
const persons = [
    new Person("Jacob", 23),
    new Person("Salron", 20),
    new Person("Eliza", 19)
];

const ar = [...persons];
console.log(ar); // -> jacob, salron, eliza

console.log(ar.sort(Person.orderPerson)); // eliza, salron, jacob

console.log(ar); // -> eliza, salron, jacob (pois o método sort altera o array original(ar))