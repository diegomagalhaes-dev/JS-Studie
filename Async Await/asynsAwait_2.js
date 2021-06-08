const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
    const usersData = fetch(url)
    console.log(usersData)
}

getUsers()

// Async
async function sayHello() {
    return 'hello'
}
console.log(sayHello()) // toda função Async retorna uma promise

sayHello().then(value => console.log(value))

async function multiply(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw 'Os valores devem ser numéricos'
    }

    return firstNumber * secondNumber;
}

console.log(multiply(2, 10));
console.log(multiply('cinco', 4));

multiply('a', 'b')
    .then(value => console.log(value)).catch(error => console.log(error));


// Await
const getPosts = () => fetch(url)

getPosts.then(response => console.log(response));