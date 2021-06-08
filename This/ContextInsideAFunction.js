// context inside a function:
// - não pega o this global, mas se não estiver no modo estrito(no caso dos nevagadores), sim!

this.name = 'jLeandro';

function sayMyName() {
    console.log(this.name);
}

sayMyName();