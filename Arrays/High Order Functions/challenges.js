const { childrenAge, mailList, shopCart } = require("./data");

// -> Adicione o ano de nascimento das crianças para cada elemento do array 
const currentYear = new Date().getFullYear();
// 1. com reduce 
const birthYear = childrenAge.reduce((list, age) => {
    list.push({
        age: age,
        birthYear: (currentYear - age)
    });
    return [...list];
}, []);
console.table(birthYear);

// 2. com map (solução mais simples)
const birthYearMap = childrenAge.map((child) => {
    return {
        age: child,
        birthYear: currentYear - child
    }
});
console.table(birthYearMap);
// -> Crie um array somente com os domínios da lista de email
const domainListMail = mailList.map(email => email.split("@")[1]);

console.table(domainListMail);

// -> Encontre o maior preço dos produtos abaixo de 100 reais 
const down100Products = shopCart.reduce((valorAnterior, product) => {
    (product.unitPrice < 100 && valorAnterior < product.unitPrice) ? valorAnterior = product.unitPrice : 0;
    return valorAnterior;
}, 0);
console.table(down100Products);