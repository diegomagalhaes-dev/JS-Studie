const languages = ["Dart", "Java", "C++"];

const iterator1 = languages[Symbol.iterator]();
console.log(iterator1);
console.log(iterator1.next());
console.log(iterator1.next())
console.log(iterator1.next());
console.log(iterator1.next());

// Criando um iterable através do protocolo iterator 
function createIterable(...array) {

    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    if (i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            };
        }
    }

};

const iterator2 = createIterable("COBOL", "LISP", "C++");
console.log(iterator2[Symbol.iterator]().next());
console.log(iterator2[Symbol.iterator]().next());
console.log(iterator2[Symbol.iterator]().next());
console.log(iterator2[Symbol.iterator]().next());

console.log(...iterator2);
console.log([...iterator2]);
for (let lang of iterator2) {
    console.log(lang)
}