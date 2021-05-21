const bestPersonage = ["Jax Teller", "Jemma Teller Morrow", "Clay Morrow", "Tara Knoles"];

const secondPersonages = ["Chibs", "Opie Winson", "Juice", "Anser", "Bob Elvis"];

// -> iterar pelo for in
for (let i in bestPersonage) {
    console.log((i) + " - " + bestPersonage[i]);
}

// -> iterar pelo for Each
bestPersonage.forEach(soaBrothers => console.log(soaBrothers));

// -> iterar pelo for Of
for (let brother of bestPersonage) {
    console.log(brother);
}

// -> aplicação do spread operator
const sons = [...bestPersonage, ...secondPersonages];
console.table(sons);

