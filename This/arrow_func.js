// this na arrow function
// - pega this do escopo anterior.
this.age = 35;
const person = function (name) {
    this.name = name;
    console.log(this.age + ': because person() its not a arrow function.'); // não acessa pois 'person' não é uma arrow_function
    return print = _ => {
        return `Name get global scope: ${this.name}`;
    }
}

const person2 = name => {
    this.name = "jLeandro";
    console.log("Hi, I'm " + name + " and I'm " + this.age + " years old.");
    return print = _ => {
        return `Name get global scope: ${this.name}`;
    }
}

console.log(person("Diêgo")());

console.log(person2("Wilghener")());