const book = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 320,
    language: "en",
    available: true
};

const value = "author";

if (value in book) {
    console.log(value);
}