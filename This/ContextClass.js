// context class
// - o this está disponível por toda a classe 

class Programmer {
    constructor() {
        this.language = "Java Script";
    }

    myWorkflow() {
        console.log("Language programming: " + this.language + " and I use React Native");
    }
}

const diego_dev = new Programmer();

diego_dev.myWorkflow();