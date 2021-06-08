const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
    const usersData = fetch(url)
    console.log(usersData)
}

getUsers()

