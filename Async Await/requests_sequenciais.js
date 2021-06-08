const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/users'

const getData = async () => {
    const data1 = fetch(url)
    const data2 = fetch(url)
    const data3 = fetch(url)

    const datas = await Promise.all([data1, data2, data3]);

    console.log(datas)
}

getData();