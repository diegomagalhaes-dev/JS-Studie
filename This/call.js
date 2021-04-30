// -> .call(this, args) 
this.name = 'Diêgo';

function personalProfile(age) {
    this.age = age;
    console.log(`My name is ${this.name} and I'm ${this.age} old.`)
}

const person = {
    name: 'Victoria'
}

personalProfile.call(this, 20);
personalProfile.call(person, 22);
