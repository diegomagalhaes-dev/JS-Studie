const players = new Map([["willFatGuy", "20 years"], ["jLeo", "20 years"], ["Jax", "22 years"]]);
console.table(players);

console.log(players)

// -> utilizando o for Of
for (let player of players) {
    console.log(player);
}
// -> utilizando o for Of com destructuring
for (let [nickName, year] of players) {
    console.log(nickName, year);
}

// -> sobre a propriedade iterator
const games = ["Fortnite", "Guild Wars 2", "The Witcher"];
const iterator = games[Symbol.iterator]();
console.log(iterator.next());