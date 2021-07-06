const book = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 320,
    language: "en",
    available: true
};
console.log("Ex1: ");
console.log(book);

// -->> short hand notation do ES6
const title = "Clean Architecture";
const author = "Robert C. Mathin";
const pages = 320;
const language = "en";
const available = true;

const book1 = {
    title,
    author,
    pages,
    language,
    available
};
console.log("\nEx2: ");
console.log(book1);

// --> Computação das chaves em Execution Time 
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";

const book2 = {
    [key1]: "Clean Architecture",
    [key2]: "Robert C. Marthin",
    [key3]: 320,
    [key4]: "en",
    [key5]: true
};
console.log("\nEx3:");
console.log(book2);