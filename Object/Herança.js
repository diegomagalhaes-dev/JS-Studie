const languageParadigm = {
    paradigm: "multi_paradigm"
};

const python = {
    name: "Phyton",
    year: 1991,
    __proto__: languageParadigm
};

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: languageParadigm
};

/*
    --> O console.log do objeto não pega as propriedades herdadas:
*/
console.log(python);

/*
    --> O "for in" permite que o as propriedades não encontradas no objeto sejam buscadas sucessivamente em seu protótipo: 
*/
for (let key in python) {
    console.log(python[key]);
}
