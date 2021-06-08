const lexical = 'Oi léxico'

const safe = secret => {
    const local = 'Oi local';
    console.log(lexical);
};

safe();

// ==> Encapsulamento (dados privados) 
const safeI = secretI => ({
    getSecret: () => secretI
});

const privateUserData = 'Dado Privado';
const obj = safeI(privateUserData);

console.log(obj); // não expõe (devido ao encapsulamento)
console.log(obj.getSecret()); // expõe, pois usamos o método de acesso getSecret