// -> Criando uma Promise 
const p1 = new Promise((resolve, reject) => {
    const aNumber = 20;
    resolve(aNumber);
});

p1.then(value => {
    console.log(value);
})