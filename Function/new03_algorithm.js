// -->> Algorítimo que simula o funcionamento do new 
const _new = function (fn, ...params) {
    // --> Como o new serve para criar objetos, fazemos isso no nosso algorítimo  
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    // --> Como os parâmetros são dinâmicos (...params), devemos usar o apply
    fn.apply(obj, params);
    return obj;
};

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

// -->> O nosso algorítimo é apenas uma simulação do new, que invocaria a função construra usando "new FuncaoConstrutora". No nosso caso iremos passar a função construtora como parâmetro em new
const person1 = _new(Person, "Leandro Pereira", "Tianguá", 2002);
const person2 = _new(Person, "Linus Torvald", "Helsinki", 1969);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());

console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());

console.log(person1.__proto__ === person2.__proto__);




