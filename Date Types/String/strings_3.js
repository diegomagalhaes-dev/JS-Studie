// Performance, em tempo de compilação, da declaração literal

let counter = 0;
console.time("performance");
while (counter < 100000) {
    "JavaScript";
    counter++;
}

console.timeEnd("performance");  