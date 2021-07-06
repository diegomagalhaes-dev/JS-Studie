const book = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 320,
    language: "en",
    available: true
};

delete book.available;
delete book["language"];
console.log(book);
console.log("available" in book);
console.log("language" in book);