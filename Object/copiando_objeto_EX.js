const book = {
    title: "Clean Architecture",
    author: "Robert C. Marthin",
    pages: 320,
    language: "en",
    available: true
};

const book2 = {};

for (let key in book) {
    book2[key] = book[key];
}

console.log(book2);

// No exemplo acima, utilizei a computação de chaves em Execution Time + a Atribuição Dinâmica