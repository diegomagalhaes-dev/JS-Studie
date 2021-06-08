// -->> Dois objetos, mesmo que identicos em seus conteúdos, por terem diferentes refêrencias de mamória, não são devidamente comparados usando operador "===", no entanto, transformando-os em JSON (string's -> por serem objetos) é possível fazer esta comparação

const book1 = {
    name: "Refactoring",
    author: "Martin Flower"
};

const book2 = {
    name: "Refactoring",
    author: "Martin Flower"
}

console.log(book1 === book2);

console.log(JSON.stringify(book1) === JSON.stringify(book2));