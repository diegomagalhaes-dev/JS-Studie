const book = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 320,
    language: "en",
    available: true
};

for (let key in book) {
    console.log(key);
}

console.log("\n");

for (let key in book) {
    console.log(book[key]);
}