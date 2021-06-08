// ==> Diferença entre Map e Object 

// -> Object
const obj = {};
obj[10] = "Number"; // o 10 é convertido para "10"
obj["10"] = "String"; // o "String" sobrescreve o valor "Number"
obj[true] = "Boolean"; // o true é convertido para "true"
obj["true"] = "String"; // o "String" sobrescreve o "Boolean"

// Toda chave que não seja do tipo String, no momento da computação do objeto, será convertida para tal
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);

// A saída do console abaixo mostra que o objeto tem somente 2 elementos, justamente pelo fato da sobrescrita, afinal, como os tipos Number e Boolean foram convertidos para String, eles são o mesmo valor dos criados já em String
console.log("\n", obj);

// -> Map
const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));

console.log(map);