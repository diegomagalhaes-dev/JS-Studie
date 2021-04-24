// -> Função construtora
const charsets = new Set(
    [
        "ASCII",
        "ISO-8859-1",
    ]
);
console.log(charsets);
console.log(Array.from(charsets
));

// --> Propriedades
// -> size
console.log(charsets.size);
// -> add
charsets.add("UTF-8")
console.log(charsets.size);
// -> forEach 
charsets.forEach(element => {
    console.log(element);
});
// -> has
console.log(charsets.has("CP-1252"));
// -> delete
console.log(charsets.delete("CP-1252"));
console.log(charsets.delete("UTF-8"));
console.log(charsets.has("UTF-8"));