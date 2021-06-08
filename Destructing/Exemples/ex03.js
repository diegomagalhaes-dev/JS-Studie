// ==> Destructing em Objetos aninhados 
const obj = {
    prop: {
        innerProp1: 1
    }
};

const { prop: { innerProp1 } } = obj;
console.log(innerProp1);

// ==> Destructing em Arrays aninhados 
const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF'];

const [, [red, green, blue]] = colors;
console.log(red, green, blue);