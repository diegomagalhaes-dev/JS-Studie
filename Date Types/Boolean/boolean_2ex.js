function generateSerial(max) {
    max = max || 1000;
    console.log('Max value: ', max);
    return Math.floor(Math.random() * max);
}

console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());