const javaScript = Object.create({});

// -->> Object.assign() copia as propriedade(s) de outros objeto(s) para outro  
Object.assign(javaScript, {
    name: "Java Script",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendar Eich",
    influencedBy: "Java, Scheme and Self"
});

console.log(javaScript);