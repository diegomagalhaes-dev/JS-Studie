// ==> Lexical Scope 
const _external = () => {
    const book = 'Sapiens: Uma Breve História da Humanidade';
    const internal = () => {
        console.log(book.toUpperCase());
    }

    console.log(book);
    console.log(internal);
    internal();
};

_external();

// ==> Exemplo closure
const contador = function (num) {
    let atual = 1;
    let timer = setInterval(() => {
        if (atual === num) {
            clearInterval(timer);
        }
        console.log(atual++, num);
    }, 1000);
}

// Invocamos a função contador, e somente após sua invocação o setInterval é invocado, mas ainda assim ele consegue fazer uso do escopo léxico (isso é o tal do Closure)
contador(5);
contador(10);