this.name = 'Diêgo';
this.age = 20;

const programmer = {
    name: 'jLeandro',
    age: 21,
    hiProgrammer: function () {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
}

programmer.hiProgrammer.bind(this)();
const meetProgrammer = programmer.hiProgrammer.bind(this); // usando o bind podemos armazenar a função em outra variável e colocar o "this", e temos a liberdade de invocarmos essa variável-função em outro momento 
meetProgrammer();
