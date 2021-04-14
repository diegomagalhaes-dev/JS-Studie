// -> Construtora
const wn1 = new WeakMap();
const obj1 = {};
const obj2 = {};

wn1.set(obj1, "obj1");
wn1.set(obj2, "obj2");

console.log(wn1);
console.log(wn1.has(obj1));
console.log(wn1.has(obj2));

console.log(wn1.get(obj1));
console.log(wn1.get(obj2));

wn1.delete(obj1);
console.log(wn1.get(obj1));
console.log(wn1.get(obj2));


// ==> Operações
