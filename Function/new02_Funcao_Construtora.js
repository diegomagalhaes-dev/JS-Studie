// -->> Função construtora (geralmente são declaradas com letra maiúscula)
const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year; 
};

// -->> Utilização da propriedade "prototype", que permite compartilhar propriedades entre os objetos criados a partir da função
Person.prototype.getAge = function () {
    return (new Date()).getFullYear() - this.year;
};

const person1 = new Person("Leandro Pereira", "Tianguá", 2002);
const person2 = new Person("Linus Torvald", "Helsinki", 1969);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());

console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());

console.log(person1.__proto__ === person2.__proto__);




