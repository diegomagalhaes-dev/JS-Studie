class Son {

    constructor(name) {
        this._name = name;
    }

    set name(son) {
        this._name = son;
    }
    get name() {
        return this._name;
    }

    hiSon() {
        return `Jesus Christ, ${this._name}!`
    }
}

const son = new Son("Chibs");
console.log(son.name);
son.name = "Opie";
console.log(son.name);

class Work extends Son {
    constructor(name, job) {
        super(name)
        this._job = job;
    }

    i_do() {
        return `Hi, brother, my name is ${this._name} and I'm ${this._job} at SAMCRO.`
    }

    static printName() {
        return this.name;
    }
}

console.log(Work.printName()); // retorna o nome da propria Classe
const vicePresident = new Work("Chibbis", "Vice President");
console.log(vicePresident.i_do());
vicePresident.name = 'Bob Elvis'
console.log(vicePresident.i_do());