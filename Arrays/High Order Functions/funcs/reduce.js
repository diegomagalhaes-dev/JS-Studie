// Reduce
const { shopCart } = require("../data");

// 1. Qual o valor total no carrinho de compras?
const totalValue = shopCart.reduce((acumulador, item) => {
    return acumulador + (item.quantity * item.unitPrice);
}, 0);

console.table(totalValue);

// 2. Quantidade total de produtos no carrinho
const productTotal = shopCart.reduce((acumulatorValue, item) => {
    return acumulatorValue + item.quantity;
}, 0)

console.log(productTotal);