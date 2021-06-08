// ATRIBUIÇÃO DINÂMICA --> Uma forma mais usual de criar e atribuir valores a um objeto, tendo em vista que permite maior flexibilidade: 

const book = {};
// const book = Object.create(null);
// const book = new Object();

book.title = "Clean Architecture";
book.author = "Robert C. Mathin";
book.pages = 320;
book.language = "en";
book.available = true;

console.log(book);

// --> Computação das chaves em Execution Time com Atribuição Dinâmica
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";

const book1 = {};

book1[key1] = "Clean Architecture";
book1[key2] = "Robert C. Martin";
book1[key3] = 320;
book1[key4] = "en";
book1[key5] = true;

console.log(book1);