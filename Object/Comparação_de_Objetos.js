const book1 = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 230,
    language: "en",
    available: true
};

const book2 = {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    pages: 230,
    language: "en",
    available: true
}

let equal = true;
for (let key in book1) {
    if (book1[key] != book2[key]) equal = false;
}

for (let key in book2) {
    if (book1[key] != book2[key]) equal = false;
}

console.log(equal);