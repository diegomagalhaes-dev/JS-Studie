// context inside a method 
// - não pega o this global, somente do objeto. 

this.name = 'Diêgo';

const dev = {
    name: 'Leandro',
    sayMyName: function () {
        console.log(this.name);
    }
};

dev.sayMyName();