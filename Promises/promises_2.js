function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input!');
        setTimeout(function () {
            resolve(a + b);
        }, 1000)
    })
}

Promise.all(
    [
        sum(3, 6),
        sum(4, 8)
    ]
).then(function (values) {
    const [a, b] = values;
    return sum(a, b).then(function (result) {
        console.log(result)
    })
}).catch(function (e) {
    console.log(e);
});