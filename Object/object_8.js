const languageParadigm = {
    paradigm: "multi_paradigm"
};

const python = {
    name: "Phyton",
    year: 1991
};
Object.setPrototypeOf(python, languageParadigm);

// --> Ao criar um objeto com o Object.create(), é possível já determinar seu protótipo:
const dartLang = Object.create(languageParadigm);
dartLang.name = "Dart";
dartLang.year = 2015;

// --> shadowing: quando uma mesma propriedade existe no objeto e em seu protótipo, a do objeto se sobrepõe "ofuscando" o protótipo ...
dartLang.paradigm = "Orientado a Objetos e Funcional";

// ...no entanto, a propriedade existente no protótipo não deixa de existir, sendo possível acessá-la buscando pelo nome da propriedade linkada ao protótipo do objeto:
console.log(Object.getPrototypeOf(dartLang));
console.log(dartLang.__proto__.paradigm);


// hasOwnProperty vai retornar true quando o objeto possui uma propriedade com o nome especificado (nota: não é true caso essa propriedade seja de herança prototípica )
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: languageParadigm
};

for (let key in javascript) {
    console.log(javascript[key], javascript.hasOwnProperty(key));
}

for (let key in dartLang) {
    console.log(dartLang[key], dartLang.hasOwnProperty(key));
}


for (let key in python) {
    console.log(python[key], python.hasOwnProperty(key));
}

