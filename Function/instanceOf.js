const date = new Date();

console.log(date instanceof Date); // true pois date decende de Date()
console.log(date instanceof Object);// true pois date decende de Date() que decende de Object
console.log(date instanceof Array); // false pois Array não faz parte da cadeia de protótipos


// -->> Implementação simplificada do que seria o algorítimo do instanceOf:
const _instanceOf = function (obj, fn) {
    // => Caso obj seja igual fn.prototype significa que ele foi criado a partir de fn
    if (obj === fn.prototype) return true;
    if (obj === null) return false;
    // => Chamada recursiva, para que a função seja invocada até a "raiz" da cadeia de protótipos: 
    return _instanceOf(obj.__proto__, fn);
}

console.log(_instanceOf(date, Date));
console.log(_instanceOf(date, Object));
console.log(_instanceOf(date, Array));