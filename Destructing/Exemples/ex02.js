const person = {
    name_: "Diêgo Magalhães",
    age: 20
};

function imprimeDados({ name_, age }) {
    console.log(name_, age);
};

// ou
// --> Trocamos o nome, ou seja, pegamos name_ e passamos para nomePerson e age para agePerson
function imprimeDadosI({ name_: nomePerson, age: agePerson }) {
    console.log(nomePerson, agePerson);
}
imprimeDados(person);
imprimeDadosI(person);

