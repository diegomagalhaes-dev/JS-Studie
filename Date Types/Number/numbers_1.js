var pi = 3.141592;
console.log(pi);

// Tipos de dados:

let t1 = (10).toFixed(2);
let t2 = ('Amor').replace('A', 4);
let t3 = (true).toString();
console.log(t1, t2, t3);    

// Operadores numéricos:

// --> Operadores binários (executar os códigos no console node (terminal))
// OR  | 
4 | 3;
(4).toString(2); // para converter para binário
(3).toString(2);

(4).toString(2).padStart(32, 0); // para alinhar
(3).toString(2).padStart(32, 0);
// AND & (somente 1 com 1 dá 1)
3 & 1;
(3).toString(2).padStart(32, 0);
(1).toString(2).padStart(32, 0);
// XOR ^ (somente 1 com 0 dá 1)
5 ^ 2;
(5).toString(2).padStart(32, 0);
(2).toString(2).padStart(32, 0);
// NOT ~
(2).toString(2).padStart(32, 0);

// >> (quanto mais deslocamos para a direita, vamos dividindo sucessivamente por 2, e quando para esquerda multiplicamos por dois)
128 >> 1;
(128).toString(2).padStart(32, 0);
(128 >> 1).toString(2).padStart(32, 0);
(64).toString(2).padStart(32, 0);

// >>> 
-2 >>> 1;
(-2 >>> 0).toString(2).padStart(32, 0); 
(2147483647).toString(2).padStart(32, 0);
