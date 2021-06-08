const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/users'


// Await
// sem await
const getPosts = () => fetch(url)

getPosts().then(response => { console.log(response.status) });

// com await
const getPosts1 = async () => {
    const response = await fetch(url)
    console.log(response.status);
}

getPosts1()


// tratamento de erros
const getPosts2 = async () => {
    try {
        const response = await fetch('whateverURL');
        console.log(response.status)
    } catch (error) {
        console.log(`URL inválida`)
    }
}

getPosts2()