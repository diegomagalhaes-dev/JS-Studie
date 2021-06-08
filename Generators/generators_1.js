function* forever() {
    let value = 1;
    while (true) {
        const reset = yield value++;
        if (reset) value = 1;
    }
}

function person(name) {
    console.log(`Name: ${name}`)
}

const receiver = forever();

console.log(receiver.next());
console.log(receiver.next());
person('Rebeca');
console.log(receiver.next());
console.log(receiver.next());
console.log(receiver.next(true));
person('Pedro');
console.log(receiver.next());
person('Kelly');
console.log(receiver.next());
console.log(receiver.next(true)); // reinicia o 'value' de forever 
person('Leticia');
console.log(receiver.next());
console.log(receiver.next());
console.log(receiver.next());
person('Vanessa');
console.log(receiver.next());
receiver.return("final")
console.log(receiver.next());
